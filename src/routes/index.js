import { Router } from 'express';

import {
  verifyWebhook,
  postWebhook,
} from '../controllers';

const router = Router();

router.get('/', (req, res) => {
  res.send('Welcome')
});

router.get('/hello', (req, res) => {
  res.json({
    msg: 'Hello Mars!'
  })
})

// Adds support for GET requests to our webhook
router.get('/webhook', verifyWebhook;

router.post('/webhook', postWebhook);

export default router;