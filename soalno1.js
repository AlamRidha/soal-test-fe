// Buatlah function randomNumber() yang menampilkan 5 angka random dari 1 s/d 100. Dengan Ketentuan sebagai berikut:
// Angka yang tampil adalah kelipatan 5,
// Jika angka yang tampil <= 60 maka tampilkan tulisan “Kurang” di belakang angka tersebut,
// Jika angka yang tampil > 60 dan <= 70 maka tampilkan tulisan belakang angka tersebut. “Cukup”,
// Jika angka yang tampil > 70 dan <= 80 maka tampilkan tulisan “Baik” di belakang angka tersebut,
// Jika angka yang tampil > 80 maka tampilkan tulisan “Luar Biasa” di belakang angka tersebut,
// Contoh:
// ■ 65 kurang
// ■ 80 baik
// ■ 100 luar biasa
// ■ 90 luar biasa
// ■ 30 kurang

const randomNumber = () => {
  const arr = [];

  for (let i = 1; i <= 5; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    arr.push(randomNumber);
  }

  return arr;
};

const pesan = (data) => {
  const dataakhir = data.filter((data2) => data2 % 5 === 0);
  let pesan = "";

  if (dataakhir > 80) {
    pesan = dataakhir + " Luar biasa";
  } else if (dataakhir > 70 && dataakhir <= 80) {
    pesan = dataakhir + " Baik";
  } else if (dataakhir > 60 && dataakhir <= 70) {
    pesan = dataakhir + "Cukup";
  } else {
    pesan = dataakhir + " Kurang";
  }
  return pesan;
};

// console.log(randomNumber().filter((data) => data % 5 === 0));

console.log(pesan(randomNumber()));
