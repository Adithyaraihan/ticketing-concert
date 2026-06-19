import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import router from "./routes/api";
import db from "./utils/database";
import docs from "./docs/route";

async function init() {
  try {
    const status = await db();``
    console.log("\n database status : ", status);

    const app = express();

    app.use(cors());
    app.use(bodyParser.json());

    const PORT = 5000;

    app.use("/api", router);
    docs(app);

    app.listen(PORT, () => {
      console.log(`Server Running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

init();
