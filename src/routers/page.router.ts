import { EMethod } from "../infterfaces/server.interface";
import { Server } from "../server";

export async function pagesRouter(serverInstance: Server) {
   serverInstance.addPageHandler("/", "index");
}
