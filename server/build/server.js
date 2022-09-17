"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// ECMA script modules
const app = (0, express_1.default)();
// localhost:3333/ads
// 2 parâmetros: requisição e resposta
// HTTP methods / API RESTful // HTTP Codes = ele mostra a resposta do back-end
// GET(leitura), POST(criando algum recurso), PUT(editando uma entidade), PATCH(editar informação específica dentro de uma entidade), DELETE (remover entidade)
app.get('/games', (request, response) => {
    return response.json([]);
});
app.post('/ads', (request, response) => {
    return response.status(201).json([]);
});
app.get('/games/:id/ads', (request, response) => {
    // const gameId = request.params.id;
    return response.json([
        { id: 1, name: 'Anúncio 1' },
        { id: 2, name: 'Anúncio 2' },
        { id: 3, name: 'Anúncio 3' },
        { id: 4, name: 'Anúncio 4' },
        { id: 5, name: 'Anúncio 5' },
    ]);
});
app.get('/games/:id/discord', (request, response) => {
    return response.json([]);
});
app.listen(3333);
