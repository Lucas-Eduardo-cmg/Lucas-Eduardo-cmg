const Boku_button = document.getElementById("button_Buku");
const Naruto_button = document.getElementById("button_Naruto");
const Dragon_button = document.getElementById("button_Dragao");
Isactive = false
Isactive_Naruto = false;
Isactive_Dragao = false;
function imag_Boku(){    
    if(Isactive === false){    
        document.getElementById('imagem_Boku').innerHTML = "<img src='sinopses/sinopse_Boku_no_Hero.png'></img>";
        Isactive = true;
    }
    else{
        Isactive = false;
        document.getElementById('imagem_Boku').innerHTML = " ";

    }
}

function imag_Naruto(){    
    if(Isactive_Naruto === false){    
        document.getElementById('imagem_Naruto').innerHTML = "<img src='sinopses/sinopse_Naruto(Clássico).png'></img>";
        Isactive_Naruto = true;
    }
    else{
        Isactive_Naruto = false;
        document.getElementById('imagem_Naruto').innerHTML = " ";
    }

}

function imag_Dragon_Ball(){    
    if(Isactive_Dragao === false){    
        document.getElementById('imagem_Dragon').innerHTML = "<img src='sinopses/sinopse_Dragon_Ball_Z.png'></img>";
        Isactive_Dragao = true;
    }
    else{
        Isactive_Dragao = false;
        document.getElementById('imagem_Dragon').innerHTML = " ";

    }
}


Boku_button.addEventListener('click',imag_Boku);
Naruto_button.addEventListener('click',imag_Naruto);

Dragon_button.addEventListener('click',imag_Dragon_Ball);