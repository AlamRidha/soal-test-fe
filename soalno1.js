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
    let randomNumber = Math.floor(Math.random() * 20) * 5 + 5;
    arr.push(randomNumber);
  }

  console.log("Angka acak kelipatan 5 ", arr);
  return arr;
};

const pesan = (data) => {
  const hasilPesan = [];
  let keterangan = "";
  for (const number of data) {
    if (number <= 60) {
      keterangan = "Kurang";
    } else if (number > 60 && number <= 70) {
      keterangan = "Cukup";
    } else if (number > 70 && number <= 80) {
      keterangan = "Baik";
    } else {
      keterangan = "Luar Biasa";
    }
    hasilPesan.push(`${number} ${keterangan}`);
  }
  return hasilPesan;
};

// console.log(randomNumber().filter((data) => data % 5 === 0));

console.log(pesan(randomNumber()));
