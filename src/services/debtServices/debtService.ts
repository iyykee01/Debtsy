import pocketbase from "../../helpers/pocketbase";

class debtService {
  async creatDebts(data: any) {
    const record = await pocketbase.collection("debts").create(data);
  }

  async getDebtsById(id: string) {
    return await pocketbase.collection("debts").getOne(id);
  }

  async updateDebts(id: string, data: object) {
    return await pocketbase.collection("debts").update(id, data);
  }

  async deleteDebts(id: string) {
    return await pocketbase.collection("debts").delete(id);
  }

  async getAllDebts(start: number, limit: number) {
    return await pocketbase.collection("debts").getList(start, limit);
  }
}

const DebtService = new debtService();

export default DebtService;
