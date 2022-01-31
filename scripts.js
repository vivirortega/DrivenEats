let food;
let drink;
let dessert;
let priceFood;
let priceDrink;
let priceDessert;
let total = priceFood + priceDrink + priceDessert;




// pratos

function chooseLasagna() {
    document.querySelector(".lasagna").style.border = "4px solid green";
    document.querySelector(".pasta").style.border = "4px solid white";
    document.querySelector(".gnocchi").style.border = "4px solid white";
    food = "Lasanha";
    priceFood = 17;
    changeButton();
}

function chooseGnocchi() {
    document.querySelector(".gnocchi").style.border = "4px solid green";
    document.querySelector(".pasta").style.border = "4px solid white";
    document.querySelector(".lasagna").style.border = "4px solid white";
    food = "Nhoque";
    priceFood = 20;
    changeButton();
}

function choosePasta() {
    document.querySelector(".pasta").style.border = "4px solid green";
    document.querySelector(".gnocchi").style.border = "4px solid white";
    document.querySelector(".lasagna").style.border = "4px solid white";
    food = "Macarrão ao Molho Branco";
    priceFood = 16;
    changeButton();
}

//bebidas

function chooseJuice() {
    document.querySelector(".juice").style.border = "4px solid green";
    document.querySelector(".cola").style.border = "4px solid white";
    document.querySelector(".fanta").style.border = "4px solid white";
    drink = "Suco de melancia";
    priceDrink = 8;
    changeButton();
}

function chooseCola() {
    document.querySelector(".cola").style.border = "4px solid green";
    document.querySelector(".fanta").style.border = "4px solid white";
    document.querySelector(".juice").style.border = "4px solid white";
    drink = "Coca-Cola";
    priceDrink = 10;
    changeButton();
}

function chooseFanta() {
    document.querySelector(".fanta").style.border = "4px solid green";
    document.querySelector(".cola").style.border = "4px solid white";
    document.querySelector(".juice").style.border = "4px solid white";
    drink = "Fanta Uva";
    priceDrink = 9;
    changeButton();
}

//sobremesa

function choosePie() {
    document.querySelector(".pie").style.border = "4px solid green";
    document.querySelector(".eclair").style.border = "4px solid white";
    document.querySelector(".brownie").style.border = "4px solid white";
    dessert = "Torta Holandesa";
    priceDessert = 10;
    changeButton();
}

function chooseEclair() {
    document.querySelector(".eclair").style.border = "4px solid green";
    document.querySelector(".brownie").style.border = "4px solid white";
    document.querySelector(".pie").style.border = "4px solid white";
    dessert = "Bomba de Chocolate";
    priceDessert = 15;
    changeButton();
}

function chooseBrownie() {
    document.querySelector(".brownie").style.border = "4px solid green";
    document.querySelector(".pie").style.border = "4px solid white";
    document.querySelector(".eclair").style.border = "4px solid white";
    dessert = "Brownie com sorvete";
    priceDessert = 17;
    changeButton();
}

//troca o botão quando os 3 pedidos são feitos
function changeButton() {
    if (food != 0 && drink != 0 && dessert != 0) {
        const button = document.querySelector('.select__button');
        button.classlist.add('conclude__button');
        button.classlist.remove('select__button');
        button.innerHTML = 'Fechar pedido';
    }
}

//finaliza pedido, confirma dados e envia pelo whatsapp

function finalOrder() {

    let name = prompt('Qual seu nome?');
    let adress = prompt('Qual seu endereço?');

    let message = `Olá, gostaria de fazer o pedido:\n- Prato: ${food}\n- Bebida: ${drink}\n- Sobremesa: ${dessert}\nTotal: R$ ${total}\n\nNome: ${name}\nEndereço: ${adress}`;
    window.open(`https://wa.me/5512993935959?text=${encodeURIComponent(message)}`);


}