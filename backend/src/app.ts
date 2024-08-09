import express, { Request, Response } from "express";
import scanRouter from "./route/scan";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  console.log("Healthy Server!");
  return res.status(200).json({ msg: "Healthy Server!" });
});

app.use("/scan", scanRouter);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
