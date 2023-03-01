import PocketBase from "pocketbase";
import { endPoint } from "./config";

const pocketbase = new PocketBase(endPoint);

export default pocketbase;
