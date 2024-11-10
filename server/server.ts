import express from "npm:express@4.21.1";

const app = express();
const PORT = 8000;

app.get("/api", (res: express.Response) => {
  res.json({ message: "Hello, world!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
