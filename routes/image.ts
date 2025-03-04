import { Request, Response, Router } from 'express';
import ImageService from '../services/imageService';

const router = Router();

const imageResize = async (req: Request, res: Response): Promise<any> => {
    const { url, width = 100, height = 100 } = req.query;

    if (!url) {
        return res.status(400).send('Missing query parameters: url');
    }

    const parsedUrl = decodeURIComponent(url as string);
    const imageBuffer = await ImageService.getImage(parsedUrl);
    const resizedImageBuffer = await ImageService.resizeImage(imageBuffer, Number(width), Number(height));

    return res.status(200).send(resizedImageBuffer);
}

router.get("/resize", imageResize);

export default router;
