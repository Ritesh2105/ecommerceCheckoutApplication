const calculateExtendedPrice = (unitPrice,qty) => "$" + (unitPrice*qty).toFixed(2);

const main = ()=>{
    const increasePantsButton = document.querySelector("#firstRow").querySelector(".iButton");
    const decreasePantsButton = document.querySelector("#firstRow").querySelector(".dButton");
    console.log(increasePantsButton);
    console.log(decreasePantsButton);

    const increaseShirtsButton = document.querySelector("#secondRow").querySelector(".iButton");
    const decreaseShirtsButton = document.querySelector("#secondRow").querySelector(".dButton");
    console.log(increaseShirtsButton);
    console.log(decreaseShirtsButton);


    const calculateButton = document.querySelector("#calculateButton");
    console.log(calculateButton);

    const havePromoCodeButton = document.querySelector("#bill-area > p:nth-child(4)> button");
    console.log(havePromoCodeButton);

    const promoCodeEnterButton = document.querySelector("#promo-code-area > form> button");
    console.log(promoCodeEnterButton);

    let pantsQuantityContainer = document.querySelector("#firstRow>div>span");
    console.log(pantsQuantityContainer);

    let shirtQuantityContainer = document.querySelector("#secondRow>div>span");
    console.log(shirtQuantityContainer);

    let pantExtendedPrice = document.querySelector("#firstRow").querySelector(".extendedPrice");
    console.log(pantExtendedPrice);

    let shirtExtendedPrice = document.querySelector("#secondRow").querySelector(".extendedPrice");
    console.log(shirtExtendedPrice);

    const PANT_PRICE = 40.99;
    const SHIRT_PRICE = 10.99;

    let currentPantsQuantity = 1;
    let currentShirtQuantity = 1;

    increasePantsButton.addEventListener("click",()=>{
        currentPantsQuantity++;
        pantsQuantityContainer.innerText = currentPantsQuantity;
        pantExtendedPrice.innerText = calculateExtendedPrice(PANT_PRICE,currentPantsQuantity);
        console.log(pantExtendedPrice.innerText);
    });
    console.log(pantExtendedPrice.innerText);
    decreasePantsButton.addEventListener("click",()=>{
        if(currentPantsQuantity){
        currentPantsQuantity--;
        pantsQuantityContainer.innerText = currentPantsQuantity;
        pantExtendedPrice.innerText = calculateExtendedPrice(PANT_PRICE,currentPantsQuantity);
    }
    });

    increaseShirtsButton.addEventListener("click",()=>{
        currentShirtQuantity++;
        shirtQuantityContainer.innerText = currentShirtQuantity;
        shirtExtendedPrice.innerText = calculateExtendedPrice(SHIRT_PRICE,currentShirtQuantity);
    });

    decreaseShirtsButton.addEventListener("click",()=>{
        if(currentShirtQuantity){
        currentShirtQuantity--;
        shirtQuantityContainer.innerText = currentShirtQuantity;
        shirtExtendedPrice.innerText = calculateExtendedPrice(SHIRT_PRICE,currentShirtQuantity);
    }
    });
    console.log(pantExtendedPrice.innerText);
    calculateButton.addEventListener("click",()=>{
        const havePromoCodeContainer = document.querySelector("#bill-area");
        havePromoCodeContainer.classList.remove("hide");
        const subTotal = document.querySelector("#subTotal");
        console.log(subTotal);

        const tax = document.querySelector("#tax");
        console.log(tax);

        const total = document.querySelector("#total");
        console.log(total);

        subTotal.innerText = "$" +(parseFloat((pantExtendedPrice.innerText).replace('$','')) + parseFloat((shirtExtendedPrice.innerText).replace('$',''))).toFixed(2);
        tax.innerText = "$" + (parseFloat((subTotal.innerText).replace('$','')) * 0.13).toFixed(2);
        total.innerText = "$" +(parseFloat((subTotal.innerText).replace('$','')) + parseFloat((tax.innerText).replace('$',''))).toFixed(2);

    });

    havePromoCodeButton.addEventListener("click",()=>{
        const promoCodeEnterContainer = document.querySelector("#promo-code-area");
        promoCodeEnterContainer.classList.remove("hide");
    });
    let count = 0;
    promoCodeEnterButton.addEventListener("click",()=>{
        count++;
        if(count ===1){
        const promoCode = document.querySelector("#promoCode");
        if(promoCode.innerText = "WELCOME10"){
            subTotal.innerText = "$" +(parseFloat((subTotal.innerText).replace('$','')-10)).toFixed(2);
            tax.innerText = "$" + (parseFloat((subTotal.innerText).replace('$','')) * 0.13).toFixed(2);
            total.innerText = "$" +(parseFloat((subTotal.innerText).replace('$','')) + parseFloat((tax.innerText).replace('$',''))).toFixed(2);
        }
        else if(promoCode.innerText = "WELCOME20"){
            subTotal.innerText = "$" +(parseFloat((subTotal.innerText).replace('$','')-20)).toFixed(2);
            tax.innerText = "$" + (parseFloat((subTotal.innerText).replace('$','')) * 0.13).toFixed(2);
            total.innerText = "$" +(parseFloat((subTotal.innerText).replace('$','')) + parseFloat((tax.innerText).replace('$',''))).toFixed(2);
        }
    }
    });

}

main();