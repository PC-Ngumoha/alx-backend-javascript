import express from 'express';
import router from './routes/index';

const app = express();
const PORT = 1245;

app.use(router);

export default app;

app.listen(PORT);
