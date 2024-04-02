import { GetUsersController } from "./controllers/get-users/get-users";
import express, { response } from "express";
import { config } from "dotenv";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";

config();
const app = express();

const port = process.env.PORT || 8000;

app.get("/users", async (req, res) => {
  const mongoGetUsersRepository = new MongoGetUsersRepository();

  const getUserController = new GetUsersController(mongoGetUsersRepository);

  const { body, statusCode } = await getUserController.handle();

  res.send(body).status(statusCode);
});

app.listen(port, () => console.log(`${port}!`));
