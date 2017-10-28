import express from 'express';
import { createServer } from 'http';
import bodyParser from 'body-parser';

import routes from './routes'

const app = express();
const server = createServer(app);

app.use(bodyParser.json())
app.use(routes);

const listener = server.listen(3000, () => {
  console.log(`Listening on ... ${listener.address().port}`)
})
