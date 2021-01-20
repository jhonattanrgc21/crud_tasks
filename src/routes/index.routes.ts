import {Router, Request, Response} from 'express';

// ======================================
//				Index Routes
// ======================================

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.render('index');
})

export default router;