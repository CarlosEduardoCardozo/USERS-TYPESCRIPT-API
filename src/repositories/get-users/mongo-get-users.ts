import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUser(): Promise<User[]> {
    return [
      {
        firstName: "Carlos",
        lastName: "Carlos",
        email: "cardozo@gmail.com",
        password: "123",
      },
    ];
  }
}
