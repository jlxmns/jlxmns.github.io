# Bird Guide — Catálogo Web de Aves

## 1) Definição do problema

### Contexto
O projeto é um catálogo web de aves (estilo guia/portfólio temático) focado em consulta rápida de espécies.
A interface precisa facilitar a descoberta de aves por busca e filtro de status de conservação.

### Público-alvo
Pessoas a partir de **12 anos** interessadas em observação de aves, estudantes e curiosos de biodiversidade.
Uso principal em **desktop**, com layout responsivo para dispositivos móveis.

### Dor principal
Hoje o usuário tem dificuldade para localizar espécies relevantes com rapidez quando os dados estão espalhados e sem filtros claros.

### Critério de sucesso
O usuário consegue encontrar uma espécie desejada em até 3 interações (digitar busca e/ou aplicar filtro) sem ajuda externa.

## 2) Wireframe documentado

- Arquivo do wireframe: `assets/wireframe.pdf`
- Desktop: grid de cards em múltiplas colunas com header fixo e filtros sempre visíveis
- Mobile: menu colapsável e grid de cards em coluna única

## 3) Arquitetura de arquivos (ITCSS)

O projeto segue a metodologia **ITCSS** com camadas organizadas de tokens a utilitários:

```
assets/
  wireframe.pdf
css/
  tokens/
    primitives.css    tokens brutos (paleta completa)
    semantics.css     tokens semânticos (light + dark)
    typography.css    famílias tipográficas
    spacing.css       radius e spacing scale
  reset.css           reset CSS moderno
  base.css            estilos base (html, body, tipografia)
  components/
    header.css        BEM: .header
    hero.css          BEM: .hero
    filters.css       BEM: .filters
    bird-card.css     BEM: .bird-card
    badge.css         BEM: .badge
    empty-state.css   BEM: .empty-state
  layout.css          grid do layout principal
  utilities.css       classes utilitárias (.sr-only, etc.)
  variables.css       entry point que importa tokens
components/
  bird-card.js        componente JS do card de ave (Web Component)
images/
  *.png
js/
  main.js
data/
  data.js
index.html
README.md
```

## 4) Paleta e tipografia

### Paleta — Forest Field
Inspiração: tons naturais (floresta, terra e contraste para leitura).

**Primitives (escalas brutas)** — definidas em `css/tokens/primitives.css`:
- `--color-stone-*` — neutros (50 a 900)
- `--color-green-*` — verde floresta (100 a 900)
- `--color-amber-*` — âmbar para realces
- `--color-red-*` — vermelho para status crítico
- `--color-blue-*` — azul para informações
- `--color-black-*` — pretos para o tema escuro

**Semantics (mapeamento de significado)** — definidas em `css/tokens/semantics.css`:
| Variável | Light | Dark (via `[data-theme="dark"]`) |
|---|---|---|
| `--color-bg` | `--color-stone-150` | `--color-black-950` |
| `--color-surface` | `--color-stone-100` | `--color-black-900` |
| `--color-text` | `--color-stone-900` | `--color-text-dark` |
| `--color-text-muted` | `--color-stone-800` | `--color-text-muted-dark` |
| `--color-primary` | `--color-green-700` | `--color-green-600` |
| `--color-border` | `--color-stone-500` | `--color-black-500` |

### Tipografia
Definida em `css/tokens/typography.css` via custom properties:
- `--font-display: 'Lora', 'Georgia', serif` — títulos e exibições
- `--font-body: 'Inter', 'Helvetica Neue', sans-serif` — textos corridos e UI
- Fontes carregadas via Google Fonts com pesos 300–600 (Inter) e 400–700 (Lora)

## 5) Acessibilidade e validação

- **HTML semântico**: uso de `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>` com landmarks apropriadas
- **ARIA**: atributos `aria-label`, `aria-describedby`, `aria-hidden` aplicados a elementos interativos e decorativos
- **Screen-reader only**: classe `.sr-only` para conteúdo exclusivo de leitores de tela (ex.: instrução de busca, label do toggle de tema)
- **Dark mode**: suporte completo via atributo `data-theme="dark"` com alternância por botão; cores ajustadas para manter contraste em ambos os temas
- **Contraste WCAG AA** (>= 4.5:1 para texto normal) em toda a paleta
- **Navegação por teclado**: todos os botões e links são focáveis e acionáveis via Enter/Space
- **Reset CSS moderno** em `css/reset.css`
- **Validação**: HTML validado semanticamente; contraste verificado contra a especificação WCAG 2.1 AA
