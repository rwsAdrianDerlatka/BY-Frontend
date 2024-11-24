let returnOrder = document.getElementById("rmaNumber");
let returnArticle = document.querySelector(".js-article");
let form1 = document.querySelector(".js-form-1");
let articleElement = document.querySelector(".js-Article");
let orderElement = document.querySelector(".js-Order");

addEventListener("input", ()=> {
    orderElement.innerText = returnOrder.value;
})           