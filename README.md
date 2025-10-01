# 🌮 Interactive Taco Recipes

Proyek ini adalah sebuah **aplikasi web halaman tunggal** yang dibangun menggunakan **Node.js, Express.js, dan EJS**. Aplikasi ini memungkinkan pengguna untuk memilih jenis taco (Ayam, Daging, atau Ikan) melalui tombol interaktif dan secara dinamis menampilkan resep lengkapnya, termasuk bahan-bahan dan harga.

---

## 🎯 Overview
Aplikasi ini menyajikan antarmuka sederhana dengan tiga pilihan taco yang direpresentasikan oleh emoji. Ketika pengguna mengklik salah satu tombol, sebuah `POST request` dikirim ke server. Server kemudian mencari data resep yang sesuai dari sumber JSON yang sudah di-hardcode, lalu me-render ulang halaman untuk menampilkan detail resep yang dipilih.

---

## ✨ Fitur
- **Pemilihan Resep Interaktif**: Pengguna dapat memilih resep dengan mengklik tombol emoji.
- **Render Konten Dinamis**: Halaman akan menampilkan detail resep yang dipilih tanpa perlu pindah ke halaman lain.
- **Tampilan Resep Detail**: Menampilkan informasi lengkap termasuk nama resep, protein, salsa, dan daftar topping berserta sub-bahannya.
- **Manajemen Data Internal**: Semua data resep dikelola sebagai objek JSON di dalam file server `index.js`.

---

## 🛠️ Teknologi yang Digunakan
- **Node.js** → Runtime environment untuk JavaScript.
- **Express.js** → Framework web untuk menangani routing dan request.
- **EJS (Embedded JavaScript Templates)** → Template engine untuk membuat HTML secara dinamis.
- **Body-parser** → Middleware untuk mem-parsing data yang dikirim dari form.
- **HTML5 & CSS3** → Untuk struktur dan styling halaman.

---

## 📂 Struktur Proyek
```bash
taco-recipes/
│── public/
│   └── styles/
│       └── main.css
│── views/
│   └── index.ejs
│── index.js          # Logika server Express
└── package.json      # Konfigurasi Node.js & dependencies
```
## 🚀 Cara Instalasi & Menjalankan
1. **Clone Repository**
```bash
# Ganti dengan URL repository Anda
git clone https://github.com/AkbarAj09/taco-project.git
```
2. **Install Dependencies**
```bash
npm install
```
3. **Running Server**
```bash
npm start
# or
nodemon index.js
```
Aplikasi akan berjalan di **http://localhost:3000**

## Routes
```bash
GET /         → Menampilkan halaman awal dengan pesan sambutan.
POST /recipe  → Memproses pilihan pengguna, mencari data resep, dan menampilkan detailnya.
```

## 👨‍💻 Author
Edited by **Akbar Abdurrahman**

