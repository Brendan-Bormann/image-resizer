import express from 'express';
import registerRoutes from './routes';

const PORT = 3000;
const app = express();

registerRoutes(app);
app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Image Resizer: Started on ${PORT}`);
});
