let jenis = document.getElementById("jenis");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

let kamu = document.getElementById("kamu");
let Astolfo = document.getElementById("Astolfo");
let hasilAkhir = document.getElementById("hasilAkhir");

let btnReset = document.getElementById("btnReset");

let pilihanBGK = ["Batu", "Gunting", "Kertas"];
let pilihanGOS = ["Gajah", "Orang", "Semut"];
let pilihanJari = ["Jempol", "Telunjuk", "Kelingking"];

function ubahPilihan() {

    if (jenis.value == "BGK") {
        btn1.innerHTML = "Batu";
        btn2.innerHTML = "Gunting";
        btn3.innerHTML = "Kertas";
    }
    else if (jenis.value == "GOS") {
        btn1.innerHTML = "Gajah";
        btn2.innerHTML = "Orang";
        btn3.innerHTML = "Semut";
    }
    else if (jenis.value == "jari") {
        btn1.innerHTML = "Jempol";
        btn2.innerHTML = "Telunjuk";
        btn3.innerHTML = "Kelingking";
    }

    kamu.innerHTML = "Pilihan kamu:...";
    Astolfo.innerHTML = "Pilihan Astolfo:...";
    hasilAkhir.innerHTML = "A-ayo main,tapi bukan karena aku suka denganmu ya,hmmpphh!";
}

function main(pilihanKamu) {

    let daftarPilihan;

    if (jenis.value == "BGK") {
        daftarPilihan = pilihanBGK;
    }
    else if (jenis.value == "GOS") {
        daftarPilihan = pilihanGOS;
    }
    else {
        daftarPilihan = pilihanJari;
    }
    
    let angkaRandom = Math.floor(Math.random() * 3);

    let pilihanAstolfo = daftarPilihan[angkaRandom];

    kamu.innerHTML = "Pilihan kamu: " + pilihanKamu;
    Astolfo.innerHTML = "Pilihan Astolfo: " + pilihanAstolfo;

    if (pilihanKamu == pilihanAstolfo) {
        hasilAkhir.innerHTML = "Seri bukan berarti aku suka kamu ya,hmmpphh!";
    }
    else if (jenis.value == "BGK") {

        if (
            (pilihanKamu == "Batu" && pilihanAstolfo == "Gunting") ||
            (pilihanKamu == "Gunting" && pilihanAstolfo == "Kertas") ||
            (pilihanKamu == "Kertas" && pilihanAstolfo == "Batu")
        ) {
            hasilAkhir.innerHTML = "Kamu menang! Hmmph,tapi jangan senang dulu ya!";
        }
        else {
            hasilAkhir.innerHTML = "Kamu kalah wleee!";
        }

    }
    else if (jenis.value == "GOS") {

        if (
            (pilihanKamu == "Gajah" && pilihanAstolfo == "Orang") ||
            (pilihanKamu == "Orang" && pilihanAstolfo == "Semut") ||
            (pilihanKamu == "Semut" && pilihanAstolfo == "Gajah")
        ) {
            hasilAkhir.innerHTML = "Kamu menang! Hmmph,tapi jangan senang dulu ya!";
        }
        else {
            hasilAkhir.innerHTML = "Kamu kalah wleee!";
        }

    }
    else if (jenis.value == "jari") {

        if (
            (pilihanKamu == "Jempol" && pilihanAstolfo == "Telunjuk") ||
            (pilihanKamu == "Telunjuk" && pilihanAstolfo == "Kelingking") ||
            (pilihanKamu == "Kelingking" && pilihanAstolfo == "Jempol")
        ) {
            hasilAkhir.innerHTML = "Kamu menang! Hmmph,tapi jangan senang dulu ya!";
        }
        else {
            hasilAkhir.innerHTML = "Kamu kalah wleee!";
        }

    }
}


btn1.addEventListener("click", function() {
    main(btn1.innerHTML);
});

btn2.addEventListener("click", function() {
    main(btn2.innerHTML);
});

btn3.addEventListener("click", function() {
    main(btn3.innerHTML);
});


jenis.addEventListener("change", ubahPilihan);


btnReset.addEventListener("click", function() {
    kamu.innerHTML = "Pilihan kamu:...";
    Astolfo.innerHTML = "Pilihan Astolfo:...";
    hasilAkhir.innerHTML = "A-ayo main,tapi bukan karena aku suka denganmu ya,hmmpphh!";
});

ubahPilihan();