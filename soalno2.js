// Terdapat seekor katak yang ingin melompati tiang setinggi X-unit. Katak tersebut dapat melakukan 2 buah jenis loncatan, loncatan kecil dan loncatan besar. Loncatan kecil sebesar 1-unit dan loncatan besar sebesar 3-unit.

// Buatlah sebuah function katakLoncat() yang menentukan berapa total loncatan yang dilakukan katak untuk mencapai ke puncak tiang. ○
// Contoh Soal:
// ■ Input: katakLoncat(28) → Output: 9 Loncatan Besar dan 1 Loncatan Kecil
// ■ Input: katakLoncat(60) → Output: 20 Loncatan Besar dan 0 Loncatan Kecil
// ■ Limit Soal: Tinggi tiang merupakan bilangan bulat positif.

const katakLoncat = (lompatan) => {
  let lompatanKecil = 1;
  let lompatanBesar = 3;

  for (let i = 0; i <= lompatan; i++) {}

  return `${lompatanBesar} Loncatan Besar dan ${lompatanKecil} Loncatan Kecil`;
};

console.log(katakLoncat(28));
