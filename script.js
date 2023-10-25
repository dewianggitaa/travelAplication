function hitung(){
    var nama = document.getElementById("inama").value;
    var tujuan = document.getElementById("itujuan").value;
    var jumlah = parseInt(document.getElementById("ijumlah").value);
    var member = document.getElementById("imember");
    var harga = 0.0;
    var diskon = 0.0;
    var total = 0.0;

    if(tujuan == "Jakarta"){
        harga = 500000;
    } else if (tujuan == "Bandung"){
        harga = 450000;
    } else if (tujuan == "Tasikalaya"){
        harga = 200000;
    } else if (tujuan == "Bogor"){
        harga = 300000;
    } else if (tujuan == "Depok"){
        harga = 400000;
    } else{
        harga = 350000;
    }

    if(member.checked){
        diskon = 0.1*harga;
    } else{
        diskon = 0.0;
    }

    total = (harga - diskon)*jumlah;

    document.getElementById("onama").value = nama;
    document.getElementById("otujuan").value = tujuan;
    document.getElementById("ojumlah").value = jumlah;
    document.getElementById("oharga").value = harga;
    document.getElementById("odiskon").value = diskon;
    document.getElementById("ototal").value = total;
}