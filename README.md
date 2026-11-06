# P.O Bus Bharata

Website React + Vite untuk melihat kelas bus, jadwal, trayek, estimasi tiba, dan simulasi booking kursi.

## Menjalankan lokal

```bash
npm ci
npm run dev
```

## Struktur

- `src/components`: header, footer, overlay animasi, dan wadah booking.
- `src/pages`: halaman Beranda dan Tentang Kami.
- `src/data`: kelas bus dan jadwal contoh.
- `src/features/booking`: pencarian jadwal, denah kursi, dan simulasi pemesanan.
- `src/features/opening`: animasi pembuka.
- `src/styles`: gaya per bagian.
- `public`: foto, logo, dan skrip inisialisasi animasi.
- `dist`: hasil `npm run build`; jangan sunting langsung.

## Deployment

Workflow `.github/workflows/pages.yml` membangun `dist` pada setiap push ke `main`. Di GitHub, pilih **Settings → Pages → Source: GitHub Actions**. Situs ini juga menggunakan konfigurasi Sites di `.openai/hosting.json`.

## Batasan

Jadwal dan harga saat ini adalah contoh. Booking disimpan di localStorage browser, tanpa pembayaran atau tiket resmi.
