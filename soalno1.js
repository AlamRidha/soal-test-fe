const randomNumber = () => {
  const arr = [];
  let pesan = "";
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
