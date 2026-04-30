# Bird Guide — Planejamento de Interface (Aula 8)

## 1) Definicao do problema

### Contexto
O projeto e um catalogo web de aves (estilo guia/portfolio tematico) focado em consulta rapida de especies.
A interface precisa facilitar descoberta de aves por busca e filtro de status de conservacao.

### Publico-alvo
Pessoas de 16 a 45 anos interessadas em observacao de aves, estudantes e curiosos de biodiversidade.
Uso principal em smartphone, com apoio em notebook/desktop para exploracao mais longa.

### Dor principal
Hoje o usuario tem dificuldade para localizar especies relevantes com rapidez quando os dados estao espalhados e sem filtros claros.

### Criterio de sucesso
O usuario consegue encontrar uma especie desejada em ate 3 interacoes (digitar busca e/ou aplicar filtro) sem ajuda externa.

## 2) Wireframe documentado

- Arquivo do wireframe: `assets/wireframe.pdf`
- Mobile: menu horizontal com quebra de linha e grid de cards em coluna unica ou dupla, dependendo do width

## 3) Arquitetura de arquivos (ITCSS)

```
assets/
  wireframe.pdf
css/
  base.css
  layout.css
  reset.css
  utilities.css
  variables.css
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

### Paleta
- Nome: Forest Field
- Inspiracao: tons naturais (floresta, terra e contraste para leitura)
- Cores principais:
  - `--color-primary: #2D6A4F`
  - `--color-text-primary: #241F14`
  - `--color-bg-primary: #F5F2EA`
  - `--color-bg-secondary: #FAF8F2`
  - `--color-border: #CCC8B8`
  - `--color-success: #2D6A4F`

### Tipografia
- Display: `Lora`
- Texto: `Inter`
- Escala em `rem`: `--fs-900` ate `--fs-100` definida em `css/variables.css`

## 5) Acessibilidade e validacao

- Contraste planejado para atender WCAG AA (>= 4.5:1 para texto normal)
- Reset CSS moderno aplicado em `css/reset.css`
- Estrutura HTML semantica implementada em `index.html`
