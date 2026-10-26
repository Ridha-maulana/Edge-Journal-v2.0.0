# Jurnale — Trading Journal

PWA jurnal trading yang diadaptasi dari kode aplikasi asli. Aplikasi berjalan di Chrome dan dirancang mobile-first untuk HP.

## Menjalankan lokal

```bash
npm start
```

Buka `http://localhost:3000` di Chrome.

## Penyimpanan data

Data akun, trade, modal, dan screenshot disimpan di penyimpanan browser perangkat melalui `localStorage`. Tidak ada database cloud yang digunakan untuk data jurnal. Gunakan menu **Backup** untuk mengunduh JSON dan menu **Restore** untuk memulihkan data pada perangkat lain atau setelah membersihkan data browser.

Aplikasi juga menyediakan manifest PWA dan service worker, sehingga Chrome pada perangkat yang mendukung dapat menawarkan **Tambahkan ke layar utama / Install app**.

## Performance v2

Halaman Performance kini dibagi menjadi tiga alur. Halaman utama menampilkan ringkasan akun, grafik, metrik, dan tombol **Bagikan ke story**. Dua tombol tambahan membuka halaman detail penuh seperti kalender: **Advanced Statistics** menampilkan periode, statistik lengkap, grafik perkembangan, kalender, analisis mingguan/harian/sesi, distribusi win/loss, P&L pair, dan Pair terpopuler; **Trader DNA** menampilkan rapor karakter trading berbasis lima dimensi.

Layout tombol dan halaman detail menyesuaikan HP, tablet, dan laptop.
