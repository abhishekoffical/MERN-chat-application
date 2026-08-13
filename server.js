import {config} from 'dotenv';

import { dbConnection } from "./Database/db.js";

config({path:"./Config/config.env"});
const { default: app } = await import("./app.js");
const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await dbConnection();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Server failed to start:", error.message);
    process.exit(1);
  }
};

startServer();
