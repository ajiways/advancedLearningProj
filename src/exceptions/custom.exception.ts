export class CustomExcteption extends Error {
   readonly status: number;
   readonly message: string;

   constructor(status: number, message: string) {
      super(message);
      // this.message = ;
      this.status = status;
   }

   static BadRequest(message: string) {
      return new CustomExcteption(400, message);
   }

   static NotFound(message: string) {
      return new CustomExcteption(404, message);
   }
}
