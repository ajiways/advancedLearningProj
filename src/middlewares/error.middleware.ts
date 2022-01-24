import { CustomExcteption } from "../exceptions/custom.exception";
import express from "express";

function errorMiddleware(
   err: unknown,
   req: express.Request,
   res: express.Response,
   next: express.NextFunction
) {
   if (err instanceof CustomExcteption) {
      return res.status(err.status).json({ message: err.message });
   }
   console.log(err);
   return res.status(500).json({ message: "Непредвиденная ошибка" });
}

export default errorMiddleware;
