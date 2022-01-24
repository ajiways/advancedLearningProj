export class CustomException extends Error {
   readonly status: number;
   readonly message: string;

   constructor(status: number, message: string) {
      super(message);
      this.status = status;
   }

   static BadRequest(message: string) {
      return new CustomException(400, message);
   }

   static NotFound(message: string) {
      return new CustomException(404, message);
   }
}
