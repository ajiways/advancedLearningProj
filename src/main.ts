import { Server } from "./server";
import { config } from "dotenv";
import { routers } from "./routers/index";
config();

const app = new Server();

async function main() {
   await app.connect();
   await app.connectToDb();
   await app.migrate();

   for (const router of routers) {
      router(app);
   }
}

main().then();
