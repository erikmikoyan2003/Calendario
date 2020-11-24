import config from "../../../config.json";
import regeneratorRuntime from "regenerator-runtime";

class Access {
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

  async check(sessionID) {
    let res = await this.do({ method: "access.check", sessionID: sessionID })
    return res.access
  }


}
const access = new User;
export default access;