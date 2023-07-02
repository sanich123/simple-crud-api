import { User } from "../types/types.ts";


class DataBase {
  users: User[];

  constructor() {
    this.users = [];
  }

  checkIfUserExists(id: string) {
    return this.users.find((user) => user.id === id);
  }
  getUsers() {
    return this.users;
  }
  getUser(userId: string) {
    return this.users.filter(({ id }) => id === userId);
  }
  createUser(user: User) {
    this.users.push(user);
  }
  updateUser(id: string, receivedFields: Partial<User>) {
    this.users.map((user) => {
      if (user.id === id) {
        for (const [key, value] of Object.entries(receivedFields)) {
          if (key === "username" || key === "age" || key === "hobbies") {
            //@ts-ignore
            user[key] = value;
          }
        }
        return user;
      }
    });
  }
  deleteUser(userId: string) {
    this.users = this.users.filter(({ id }) => userId !== id);
  }
}

export const dataBase = new DataBase();
