const cupones = ["descuento1", "descuento2", "descuento3"];

function calcularPrecioConDescuento(precio, descuento) {

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function getPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const CouponValue = inputCoupon.value;

    let descuento;

    if (!cupones.includes(CouponValue)) {
        alert("Este cupon: " + CouponValue + " No existe");
    } else if (CouponValue === "descuento1") {
        descuento = 15;
    } else if (CouponValue === "descuento2") {
        descuento = 30;
    } else if (CouponValue === 'descuento3') {
        descuento = 50;
    }

    // switch (CouponValue) {
    //     case "descuento1": descuento = 15;
    //         break;
    //     case "descuento2": descuento = 30;
    //         break;
    //     case "descuento3": descuento = 50;
    //         break;
    // }

    const precioConDesuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDesuento;
}