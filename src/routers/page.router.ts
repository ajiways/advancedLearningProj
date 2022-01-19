import { EMethod } from "../infterfaces/server.interface";
import { serverInstance } from "../main";

export async function pagesRouter() {
   serverInstance.addPageHandler("/", "index");
}
