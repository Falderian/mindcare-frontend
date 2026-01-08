class Api {
  static url = "http://localhost:3030/";
  static auth = this.url + "auth/";

  static sign = {
    in: this.auth + "sign-in",
    up: this.auth + "sign-up",
  };
}
export default Api;
