import pocketbase from "../../helpers/pocketbase";

class userService {
  async updateUser(id: string, data: any) {
    return await pocketbase.collection("users").update("RECORD_ID", data);
  }
}

const UserService = new userService();
export default UserService;
