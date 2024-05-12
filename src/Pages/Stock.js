'use client';
import React from 'react';

const exampleKost = [
  {
    id: 1,
    stars: 4,
    title: "Kost Faza Danau Ranau G5 E34",
    price: "Rp. 950.000/bulan",
    img: "https://path_to_your_image/kost_a.c:\Users\moklet1\Downloads\Jasa bangun rumah Kost Bogor, 0822 9000 9990, BEGARANSI 1.png", // Ganti dengan path gambar yang benar
  },
  {
    id: 2,
    stars: 4,
    title: "Kost Faza Danau Ranau G5 E34",
    price: "Rp. 950.000/bulan",
    img: "https://path_to_your_image/kost_a.c:\Users\moklet1\Downloads\Jasa bangun rumah Kost Bogor, 0822 9000 9990, BEGARANSI 1.png", // Ganti dengan path gambar yang benar
  },
  {
    id: 3,
    stars: 4,
    title: "Kost Faza Danau Ranau G5 E34",
    price: "Rp. 950.000/bulan",
    img: "https://path_to_your_image/kost_a.c:\Users\moklet1\Downloads\Jasa bangun rumah Kost Bogor, 0822 9000 9990, BEGARANSI 1.png", // Ganti dengan path gambar yang benar
  },
  {
    id: 4,
    stars: 4,
    title: "Kost Faza Danau Ranau G5 E34",
    price: "Rp. 950.000/bulan",
    img: "https://path_to_your_image/kost_a.c:\Users\moklet1\Downloads\Jasa bangun rumah Kost Bogor, 0822 9000 9990, BEGARANSI 1.png", // Ganti dengan path gambar yang benar
  },
  {
    id: 5,
    stars: 4,
    title: "Kost Faza Danau Ranau G5 E34",
    price: "Rp. 950.000/bulan",
    img: "https://path_to_your_image/kost_a.c:\Users\moklet1\Downloads\Jasa bangun rumah Kost Bogor, 0822 9000 9990, BEGARANSI 1.png", // Ganti dengan path gambar yang benar
  },
];

function MenuKost(props) {
  const { kost } = props;
  return (
    <div>
      {kost.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.price}</p>
          <img src={item.img} alt={item.title} />
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Daftar Kost</h1>
      <MenuKost kost={exampleKost} />
    </div>
  );
}

export default App;
