import express from 'express';
import root from './root';
import image from './image';

const registerRoutes = (app: express.Application) => {
    app.use("/", root);
    app.use("/image", image);
}

export default registerRoutes;