import express from 'express';
import cors from 'cors';



const app = express();
app.use(cors());
app.use(express.json());

app.get('/healthz', (_req, res) => res.json({ ok: true }));

// Register generated routes


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log('🚀 API listening on http://localhost:' + port);
});
