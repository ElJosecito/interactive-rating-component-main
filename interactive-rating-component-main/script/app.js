
//Botones

const btnUno = document.getElementById("list_1");
const btnDos = document.getElementById("list_2");
const btnTres = document.getElementById("list_3");
const btnCuatro = document.getElementById("list_4");
const btnCinco = document.getElementById("list_5");
let addNum = 0;


const card = document.getElementById("selectionHidden");
const btnSubmit = document.getElementById("submitBtn");

const numVar = document.getElementById("numTxt");
//


//
btnUno.addEventListener("click", ()=>{
    btnUno.className = "active";
    btnDos.classList.remove("active");
    btnTres.classList.remove("active");
    btnCuatro.classList.remove("active");
    btnCinco.classList.remove("active");

    addNum = 1;
});

btnDos.addEventListener("click", ()=>{
    btnUno.classList.remove("active");
    btnDos.className = "active";
    btnTres.classList.remove("active");
    btnCuatro.classList.remove("active");
    btnCinco.classList.remove("active");

    addNum = 2;
});

btnTres.addEventListener("click", ()=>{
    btnUno.classList.remove("active");
    btnDos.classList.remove("active");
    btnTres.className = "active";
    btnCuatro.classList.remove("active");
    btnCinco.classList.remove("active");

    addNum = 3;
});

btnCuatro.addEventListener("click", ()=>{
    btnUno.classList.remove("active");
    btnDos.classList.remove("active");
    btnTres.classList.remove("active");
    btnCuatro.className = "active";
    btnCinco.classList.remove("active");

    addNum = 4;
});

btnCinco.addEventListener("click", ()=>{
    btnUno.classList.remove("active");
    btnDos.classList.remove("active");
    btnTres.classList.remove("active");
    btnCuatro.classList.remove("active");
    btnCinco.className = "active";

    addNum = 5;

});


const klk = ()=>{
    card.classList.remove("hidden");
    numVar.innerHTML = (`You selected ${addNum} out of 5`);
}

btnSubmit.addEventListener("click", klk);
