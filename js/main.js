var ujianTertulis1  = document.getElementById("nilai_ujian_tertulis1");
var ujianTertulis2  = document.getElementById("nilai_ujian_tertulis2");
var ujianPraktek    = document.getElementById("nilai_ujian_praktek");
var ujianTertulis   = document.getElementById("nilai_ujian_tertulis");
var nilaiRata       = document.getElementById("nilai_rata");
var score_toefl     = document.getElementById('scoreToefl');
var nilai_toefl     = document.getElementById('nilaiToefl');
var hasil_beasiswa  = document.getElementById('hasilBeasiswa');
var nilai_beasiswa  = document.getElementById('nilaiBeasiswa');

var nilai_ujian_tertulis1 = 100;
var nilai_ujian_tertulis2 = 100;
var nilai_ujian_praktek   = 90;
var scoreToefl            = 500;
var nilaiToefl            = 0;
var hasilBeasiswa         = undefined;

if(scoreToefl>=500){
  nilaiToefl = 100;
}
else if(scoreToefl < 500 && scoreToefl >= 450){
  nilaiToefl = 85;
}
else{
  nilaiToefl = 50;
}

var nilai_rata = Math.round(((nilai_ujian_tertulis1+nilai_ujian_tertulis2)+nilai_ujian_praktek)/3);

var nilai_ujian_tertulis = (nilai_ujian_tertulis1+nilai_ujian_tertulis2)/2;

var nilaiBeasiswa = (nilai_rata+nilaiToefl)/2;
if(nilaiBeasiswa > 90){
  hasilBeasiswa = "<b>LULUS";
}
else{
  hasilBeasiswa = "Tidak <b>LULUS";
}

nilaiRata.innerHTML = nilai_rata;
ujianTertulis.innerHTML = nilai_ujian_tertulis;
ujianPraktek.innerHTML = nilai_ujian_praktek;
score_toefl.innerHTML = scoreToefl;
nilai_toefl.innerHTML = nilaiToefl;
nilai_beasiswa.innerHTML = nilaiBeasiswa;
hasil_beasiswa.innerHTML = hasilBeasiswa;

