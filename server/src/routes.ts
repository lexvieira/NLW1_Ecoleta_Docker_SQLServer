import express from 'express';

const routes = express.Router()

routes.get('/', (request, response) => {
    response.json({ message: 'Hellooo world1' });
});

export default routes;