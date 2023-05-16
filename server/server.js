import { app } from "./index.js";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

(async () => {
    try {
      await mongoose.connect(process.env.DB);
      console.log("DB connected");
  
      app.listen(process.env.port, (err) => {
        if (err) throw err;
        console.log(`Server started on: http://localhost:${process.env.port}`);
      });
    } catch(err) {
      console.log(err)
    }
  })();