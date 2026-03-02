const quantity   = document.getElementById("quantity");
const quantityi  = document.getElementById("quantityi");
const quantityii = document.getElementById("quantityii");

const result   = document.getElementById("result");
const resulti  = document.getElementById("resulti");
const resultii = document.getElementById("resultii");

const narsa    = document.getElementById("narsa");
const subtotal = document.getElementById("subtotal");
const shipping = document.getElementById("shipping");
const total    = document.getElementById("total");
const checkout = document.getElementById("checkout");

const clearBtn   = document.getElementById("clear");
const clearrBtn  = document.getElementById("clearr");
const clearrrBtn = document.getElementById("clearrr");


function hisoblaItem() {
    const a = Number(quantity.value) || 0;
    const b = Number(quantityi.value) || 0;
    const c = Number(quantityii.value) || 0;
    narsa.value = a + b + c;
}

function hisoblaSubtotal() {
    const a = Number(result.value.replace(/\D/g, "")) || 0;
    const b = Number(resulti.value.replace(/\D/g, "")) || 0;
    const c = Number(resultii.value.replace(/\D/g, "")) || 0;
    subtotal.value = (a + b + c) + " $";
}

function hisoblaShipping() {
    const sub = Number(subtotal.value.replace(/\D/g, "")) || 0;
    const ship = Math.round((sub * 12) / 100);
    shipping.value = ship + " $";
}

function hisoblaTotal() {
    const sub  = Number(subtotal.value.replace(/\D/g, "")) || 0;
    const ship = Number(shipping.value.replace(/\D/g, "")) || 0;
    const sum = sub + ship;

    total.value = sum + " $";
    checkout.value = sum + " $";
}

function qaytaHisobla() {
    hisoblaItem();
    hisoblaSubtotal();
    hisoblaShipping();
    hisoblaTotal();
}

quantity.addEventListener("input", () => {
    let value = Number(quantity.value) || 0;
    if (value > 50) value = 50;
    if (value < 0) value = 0;

    quantity.value = value;
    result.value = (value * 34) + " $";

    qaytaHisobla();
});

quantityi.addEventListener("input", () => {
    let value = Number(quantityi.value) || 0;
    if (value > 50) value = 50;
    if (value < 0) value = 0;

    quantityi.value = value;
    resulti.value = (value * 26) + " $";

    qaytaHisobla();
});

quantityii.addEventListener("input", () => {
    let value = Number(quantityii.value) || 0;
    if (value > 50) value = 50;
    if (value < 0) value = 0;

    quantityii.value = value;
    resultii.value = (value * 54) + " $";

    qaytaHisobla();
});

clearBtn.addEventListener("click", () => {
    quantity.value = 0;
    result.value = "0 $";
    qaytaHisobla();
});

clearrBtn.addEventListener("click", () => {
    quantityi.value = 0;
    resulti.value = "0 $";
    qaytaHisobla();
});

clearrrBtn.addEventListener("click", () => {
    quantityii.value = 0;
    resultii.value = "0 $";
    qaytaHisobla();
});

const owner = document.getElementById("owner");
owner.addEventListener("input", () => {
    let value = owner.value
        .toLowerCase()
        .replace(/[^a-zA-Z' ]/g, "")
        .replace(/\s{2,}/g, " ");

    value = value
        .split(" ")
        .map(w => w ? w[0].toUpperCase() + w.slice(1) : "")
        .join(" ");

    owner.value = value;
});

const card = document.getElementById("card");
card.addEventListener("input", () => {
    let value = card.value.replace(/\D/g, "").substring(0, 16);
    card.value = value.replace(/(.{4})/g, "$1 ").trim();
});

const expiry = document.getElementById("expiry");
expiry.addEventListener("input", () => {
    let value = expiry.value.replace(/\D/g, "").substring(0, 4);
    if (value.length >= 3) value = value.slice(0, 2) + "/" + value.slice(2);
    expiry.value = value;
});

const three = document.getElementById("three");
three.addEventListener("input", () => {
    three.value = three.value.replace(/\D/g, "").substring(0, 3);
});