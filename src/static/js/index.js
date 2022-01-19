document.addEventListener("DOMContentLoaded", () => {
   const currencySelect = document.getElementById("currency");
   const brandSelect = document.getElementById("brand");
   const categorySelect = document.getElementById("category");
   const productSelect = document.getElementById("product");
   const lasts = document.querySelector(".lasts");
   const orderAmount = document.getElementById("orderAmount");
   const customerSelect = document.getElementById("customers");
   const wrapper = document.querySelector(".wrapper");
   const moreBtn = document.querySelector(".more");
   const orderForm = document.querySelector(".form-order");
   const formProduct = document.querySelector(".form-product");
   const formOrder = document.querySelector(".form-order");
   const modal = document.getElementById("modal");
   const span = document.querySelector(".close");
   const modalText = document.getElementById("modalText");

   modalText.textContent = "В данный момент фронт не работает. Задание этого не подразумевало, правильно? ";
   modal.style.display = "block";

   span.onclick = function () {
      modal.style.display = "none";
   };

   window.onclick = function (event) {
      if (event.target == modal) {
         modal.style.display = "none";
      }
   };

   formOrder.addEventListener("submit", async (e) => {
      e.preventDefault();
      // await sendOrder(formOrder);
   });
   formProduct.addEventListener("submit", async (e) => {
      e.preventDefault();
      // await sendProduct(formProduct);
   });

   async function sendProduct(form) {
      const formBody = {
         caption: form.caption.value,
         category_id: form.category_id.value,
         brand_id: form.brand_id.value,
         price: form.price.value,
         currency_id: form.currency_id.value,
         description: form.description.value,
         available_amount: form.available_amount.value,
      };
      if (!validateForm(formBody)) {
         return;
      } else {
         const res = await fetch("http://localhost:8080/products", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(formBody),
         }).then((data) => data.json());
         modalText.textContent = res.message;
         modal.style.display = "block";
      }
   }

   async function sendOrder(form) {
      const formBody = {
         customer_id: form.customer_id.value,
         product_id: form.product_id.value,
         amount: form.amount.value,
      };
      console.log(validateForm(formBody));
      if (!validateForm(formBody)) {
         return;
      } else {
         const res = await fetch("http://localhost:8080/makeorder", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(formBody),
         }).then((data) => data.json());
         modalText.textContent = res.message;
         modal.style.display = "block";
      }
   }

   function validateForm(formBody) {
      const items = Object.entries(formBody);
      let status = true;
      console.log(items);
      items.forEach((item) => {
         if (!item[1]) {
            modalText.textContent = "Ошибка, неверно заполнены поля в форме";
            modal.style.display = "block";
            status = false;
            return;
         }
      });
      return status;
   }

   async function initProductAddSide() {
      const currencies = await fetch("http://localhost:8080/currencies").then((data) => data.json());
      const brands = await fetch("http://localhost:8080/brands").then((data) => data.json());
      const categories = await fetch("http://localhost:8080/categories").then((data) => data.json());
      categories.forEach((item) => {
         categorySelect.innerHTML += `<option value="${item.id}">${item.caption}</option>`;
      });
      brands.forEach((item) => {
         brandSelect.innerHTML += `<option value="${item.id}">${item.caption}</option>`;
      });
      currencies.forEach((item) => {
         currencySelect.innerHTML += `<option value="${item.id}">${item.symbol}</option>`;
      });
   }
   async function initOrderSide() {
      const products = await fetch("http://localhost:8080/products").then((data) => data.json());
      const customers = await fetch("http://localhost:8080/customers").then((data) => data.json());
      const availableProducts = [];
      let currItem = products[0];
      lasts.textContent = `В наличии ${currItem.available_amount} едениц`;
      products.forEach((item) => {
         if (item.available_amount <= 0) {
            return;
         } else {
            productSelect.innerHTML += `<option value="${item.id}">${item.caption}</option>`;
            availableProducts.push(item);
         }
      });
      productSelect.addEventListener("change", () => {
         availableProducts.find((item) => {
            if (item.id == productSelect.value) {
               currItem = item;
               lasts.textContent = `В наличии ${currItem.available_amount} едениц`;
               if (orderAmount.value > +item.available_amount) {
                  orderAmount.value = item.available_amount;
               }
            }
         });
      });
      orderAmount.addEventListener("input", () => {
         if (+currItem.available_amount <= +orderAmount.value) {
            orderAmount.value = currItem.available_amount;
         } else if (orderAmount.value < 0) {
            orderAmount.value = 0;
         }
      });
      customers.forEach((item) => {
         customerSelect.innerHTML += `
        <option value="${item.id}">${item.first_name} ${item.last_name}</option>
      `;
      });
   }
   initProductAddSide();
   initOrderSide();

   setTimeout(() => {
      wrapper.classList.add("show");
   }, 100);
   moreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      orderForm.classList.toggle("form-order");
      if (moreBtn.textContent == ">>") moreBtn.textContent = "<<";
      else moreBtn.textContent = ">>";
   });
});
