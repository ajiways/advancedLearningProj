import swaggerJsDoc from "swagger-jsdoc";

const specs = {
   definition: {
      openapi: "3.0.0",
      info: {
         title: "My Homework Shop-Api",
         version: "0.0.1",
         description: "Homework",
      },
      servers: [
         {
            url: "http://localhost:8080",
         },
      ],
   },
   apis: ["../**/*.router{.js,.ts}"],
   // Подругому никак не смог сделать, в любом другом случае он просто не видит файлы
};

export const swaggerConfig = swaggerJsDoc(specs);
