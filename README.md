# API Feita utilizando NODE JS, Express e MongoDB

API de livros, feita utilizando Node JS, Express e MongoDB.

## Instalação

Para instalar as dependências, basta executar o comando:

```bash
npm install
```

## Execução

Para executar a API, basta executar o comando:

```bash
npm run dev
```

## Rotas

### GET /livros

Retorna todos os livros cadastrados.

### GET /livros/:id

Retorna um livro específico.

### POST /livros

Cadastra um novo livro.

### PUT /livros/:id

Atualiza um livro específico.

### DELETE /livros/:id

Deleta um livro específico.

## Exemplo de requisição

```bash
curl --request POST \
  --url http://localhost:3000/livros \
  --header 'Content-Type: application/json' \
  --data '{
    "titulo": "O Senhor dos Anéis",
    "autor": "J. R. R. Tolkien",
    "editora": "HarperCollins",
    "ano": 2019,
    "genero": "Fantasia"
}'
```

## Exemplo de resposta

```json
{
  "livro": {
    "_id": "5f9b7b7b9c9b9b9b9b9b9b9b",
    "titulo": "O Senhor dos Anéis",
    "autor": "J. R. R. Tolkien",
    "editora": "HarperCollins",
    "ano": 2019,
    "genero": "Fantasia",
    "__v": 0
  }
}
```
