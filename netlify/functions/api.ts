import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();
const router = Router();

// Mock DB for now (Netlify functions are stateless, so this resets on sleep)
// To keep data permanently, you will need to connect MongoDB/Supabase here later.
let voices = [{ id: 1, content: "The first step is always the hardest.", likes: 5 }];

router.get("/voices", (req, res) => {
  res.json(voices);
});

router.post("/voices", (req, res) => {
  const { content } = req.body;
  const newVoice = { id: Date.now(), content, likes: 0 };
  voices.push(newVoice);
  res.status(201).json(newVoice);
});

api.use(express.json());
api.use("/.netlify/functions/api", router);

export const handler = serverless(api);
