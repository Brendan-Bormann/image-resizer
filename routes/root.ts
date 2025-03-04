import { Request, Response, Router } from 'express';

const router = Router();

const getIndex = async (req: Request, res: Response): Promise<any> => {
    return res.redirect('/index.html');
}

router.get("/", getIndex);

export default router;
