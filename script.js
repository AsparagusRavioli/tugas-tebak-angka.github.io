const Angkarandom = Math.floor(Math.random() * 10 + 1 );
console.log(Angkarandom)



let Angka = -1;
while (Angkarandom !== Angka) {
    Angka = parseInt(prompt("Tebak Nilai Angka! \nAngka mulai dari 1 sampai 10 "));
	if (isNaN(Angka)) {
		alert("harus angka!!!");
	}else if (Angkarandom === Angka) {
        alert("Selamat tebakan harga barang kamu benar!");
	}else if (Angkarandom > Angka) {
		alert(`Angka lebih tinggi dari ${Angka}`);
    }else{
		alert(`Angka lebih rendah dari ${Angka}`);
	}
}



const MainLagi = confirm(" Ingin Main lagi?");
    if (MainLagi) {
        location.reload();
}