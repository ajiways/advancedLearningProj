import { cartRouter } from "./carts.router";
import { brandsRouter } from "./brands.router";
import { paymentsRouter } from "./payments.router";
import { productsRouter } from "./products.router";
import { customersRouter } from "./customerts.router";
import { categoriesRouter } from "./categories.router";
import { currenciesRouter } from "./currencies.router";
import { propertiesRouter } from "./properties.router";
import { attachmentsRouter } from "./attachments.router";
import { productImagesRouter } from "./productImages.router";
import { ordersRouter } from "./orders.router";
import { pagesRouter } from "./page.router";

export const routers = [
   cartRouter,
   brandsRouter,
   paymentsRouter,
   productImagesRouter,
   productsRouter,
   customersRouter,
   categoriesRouter,
   currenciesRouter,
   propertiesRouter,
   attachmentsRouter,
   ordersRouter,
   pagesRouter,
];
