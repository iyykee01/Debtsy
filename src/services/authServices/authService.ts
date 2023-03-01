import pocketbase from "../../helpers/pocketbase";

class authService {
  async signUp(data: any) {
    return await pocketbase.collection("users").create(data);
  }

  async veryfyEmail(email: string) {
    return await pocketbase.collection("users").requestVerification(email);
  }

  async login(email: string, password: string) {
    return await pocketbase
      .collection("users")
      .authWithPassword(email, password);
  }
}

const AuthService = new authService();

export default AuthService;
