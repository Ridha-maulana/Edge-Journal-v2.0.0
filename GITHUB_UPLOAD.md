# Panduan Upload Jurnale v2.0.0 ke GitHub

## Upload pertama

1. Ekstrak folder `jurnale-v2.0.0`.
2. Buat repository kosong di GitHub, tanpa README tambahan agar tidak terjadi konflik.
3. Jalankan perintah berikut dari folder hasil ekstrak:

```bash
git init
git branch -M main
git add .
git commit -m "Initial upload Jurnale v2.0.0"
git remote add origin https://github.com/USERNAME/NAMA-REPOSITORY.git
git push -u origin main
```

## File utama aplikasi

- `index.html` — seluruh UI, fitur jurnal, Performance v2, Advanced Statistics, Trader DNA, dan logika localStorage.
- `server.js` — server preview Node.js.
- `package.json` — perintah `npm start`.
- `manifest.webmanifest`, `sw.js`, dan file `icon-*.png` — instalasi PWA di Chrome.
- `README.md` — dokumentasi penggunaan.
- `app.config.ts` dan `manus-routes.json` — metadata/konfigurasi proyek Manus; boleh tetap disimpan di GitHub.

## Saat ada perbaikan berikutnya

Tidak perlu commit ulang semua file. Commit hanya file yang berubah, misalnya:

```bash
git status
git add index.html
git commit -m "Update Performance layout"
git push
```

Jika perubahan menyentuh beberapa file, tambahkan hanya file-file tersebut:

```bash
git add index.html README.md TODO.md
git commit -m "Improve journal filters"
git push
```

Data trade, akun, modal, dan screenshot tidak berada di folder proyek. Data tersebut disimpan di localStorage browser masing-masing perangkat, jadi tidak ikut terkirim ke GitHub.

## Menjalankan lokal

```bash
npm start
```

Lalu buka `http://localhost:3000` di Chrome.
