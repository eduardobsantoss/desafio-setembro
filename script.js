"use strict";
const sons={
    A:["sounds/soundA.mp3", "sounds/soundB.mp3", "sounds/soundC.mp3", "sounds/soundD.mp3", "sounds/soundE.mp3", "sounds/soundF.mp3", "sounds/soundG.mp3", "sounds/soundH.mp3", "sounds/soundI.mp3"],
    S:["sounds/soundB.mp3", "sounds/soundA.mp3", "sounds/soundC.mp3", "sounds/soundD.mp3", "sounds/soundE.mp3", "sounds/soundF.mp3", "sounds/soundG.mp3", "sounds/soundH.mp3", "sounds/soundI.mp3"],
    D:["sounds/soundC.mp3", "sounds/soundA.mp3", "sounds/soundB.mp3", "sounds/soundD.mp3", "sounds/soundE.mp3", "sounds/soundF.mp3", "sounds/soundG.mp3", "sounds/soundH.mp3", "sounds/soundI.mp3"],
    F:["sounds/soundD.mp3", "sounds/soundA.mp3", "sounds/soundB.mp3", "sounds/soundC.mp3", "sounds/soundE.mp3", "sounds/soundF.mp3", "sounds/soundG.mp3", "sounds/soundH.mp3", "sounds/soundI.mp3"],
    G:["sounds/soundE.mp3", "sounds/soundA.mp3", "sounds/soundB.mp3", "sounds/soundC.mp3", "sounds/soundD.mp3", "sounds/soundF.mp3", "sounds/soundG.mp3", "sounds/soundH.mp3", "sounds/soundI.mp3"],
    H:["sounds/soundF.mp3", "sounds/soundA.mp3", "sounds/soundB.mp3", "sounds/soundC.mp3", "sounds/soundD.mp3", "sounds/soundE.mp3", "sounds/soundG.mp3", "sounds/soundH.mp3", "sounds/soundI.mp3"],
    J:["sounds/soundG.mp3", "sounds/soundA.mp3", "sounds/soundB.mp3", "sounds/soundC.mp3", "sounds/soundD.mp3", "sounds/soundE.mp3", "sounds/soundF.mp3", "sounds/soundH.mp3", "sounds/soundI.mp3"],
    K:["sounds/soundH.mp3", "sounds/soundA.mp3", "sounds/soundB.mp3", "sounds/soundC.mp3", "sounds/soundD.mp3", "sounds/soundE.mp3", "sounds/soundF.mp3", "sounds/soundG.mp3", "sounds/soundI.mp3"],
    L:["sounds/soundI.mp3", "sounds/soundA.mp3", "sounds/soundB.mp3", "sounds/soundC.mp3", "sounds/soundD.mp3", "sounds/soundE.mp3", "sounds/soundF.mp3", "sounds/soundG.mp3", "sounds/soundH.mp3"]},
    criarDiv=texto=>

    {const div=document.createElement("div");
    div.classList.add("key");
    div.textContent=texto;
    div.id=texto;
    document.getElementById("container").appendChild(div)},exibir=sons=>
    {Object.keys(sons).forEach(criarDiv)},

    tocarSom=letra=>

    {const sonsDaLetra=sons[letra];
        if(sonsDaLetra)
        {const somAleatorio=sonsDaLetra[Math.floor(Math.random()*sonsDaLetra.length)];
            const audio=new Audio(somAleatorio);
            audio.play()}
    },
        adicionarEfeito=letra=>document.getElementById(letra).classList.add("active"),removerEfeito=letra=>
        {const div=document.getElementById(letra),removeActive=()=>
            div.classList.remove("active");
            div.addEventListener("transitionend",removeActive)},
            ativarDiv=evento=>
            {const letra=evento.type=="click"?evento.target.id:event.key.toUpperCase(),letraPressionada=sons.hasOwnProperty(letra);
            letraPressionada&&(adicionarEfeito(letra),tocarSom(letra),removerEfeito(letra))};

    exibir(sons),document.getElementById("container").addEventListener("click",ativarDiv),document.addEventListener("keydown",ativarDiv);

/*
var array = [];
for (var i = 0; i < 20; i++) {
  array[i] = i;
}

Termo equivalente = for(var a=[],i=0;i<20;a[i]=i++);
*/