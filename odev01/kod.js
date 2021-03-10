var dogrucevap="file:///C:/Users/ASUS/Desktop/odev01/odev01/kedi1.jpg";
var hak = 2;
var sayi;


function tikla1(){
    hak=hak-1;
    var bir= document.getElementById("img0");
    bir.src="kedi1.jpg";
    if(bir.src ===dogrucevap){
        document.getElementById("kazandiId").style.display="block";
        document.getElementById("kazandiId").innerHTML="Tebrikler Kazandınız.";
        document.getElementById("yenildiId").style.display="none";
        if(hak<=-1){
            document.getElementById("kazandiId").innerHTML="Artık çok geç. Üzgünüm..";
        }
    }
}

function tikla2(){
    hak=hak-1;
    var iki= document.getElementById("img1");
    iki.src="kedi2.jpg";
    if(iki.src !==dogrucevap){
        document.getElementById("yenildiId").style.display="block";
        document.getElementById("yenildiId").innerHTML="Yanlış kartı seçtiniz..Kalan hakkınız"+" "+hak;
        if(hak<=0){
            document.getElementById("yenildiId").innerHTML="Kaybettiniz.";
            document.getElementById("kazandiId").style.display="none";
        }
    }
}
function tikla3(){
    hak=hak-1;
    var uc= document.getElementById("img2");
    uc.src="kedi2.jpg";
    if(uc.src !==dogrucevap){
        document.getElementById("yenildiId").style.display="block";
        document.getElementById("yenildiId").innerHTML="Yanlış kartı seçtiniz..Kalan hakkınız"+" "+hak;
        if(hak<=0){
            document.getElementById("yenildiId").innerHTML="Kaybettiniz.";
            
        }
    }
}

function yenile(){
    location.reload();
}

function karistir(){
    sayi=Math.ceil(Math.random()*2);
    console.log(sayi);
    
}
