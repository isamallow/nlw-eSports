import express from 'express';
// ECMA script modules

const app = express();

// localhost:3333/ads
// 2 parâmetros: requisição e resposta

app.get('/ads', (request, response) => {
  return response.json([
    {id: 1, name: 'Anúncio 1'},
    {id: 2, name: 'Anúncio 2'},
    {id: 3, name: 'Anúncio 3'},
  ])
});

app.listen(3333);

