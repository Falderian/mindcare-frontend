class Api {
  static url = "https://mindcare-backend-v5p1.onrender.com/";
  static auth = this.url + "auth/";

  static sign = {
    in: this.auth + "sign-in",
    up: this.auth + "sign-up",
  };
}
export default Api;
