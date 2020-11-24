import config from "../../../config.json";
import regeneratorRuntime from "regenerator-runtime";

class User {
  constructor() {
    this.url = config.url + "/api";
  }

  async do(options) {
    let response = await fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(options),
    });
    return await response.json();
  }

  async create(login, password) {
    let res = await this.do({
      method: "user.create",
      login: login,
      password: password,
    });
    return res;
  }

  // async get() {}
}
const user = new User;
export default user;