# PinjamBiru — Prototipe Aplikasi Pendanaan

Stack:
- Next.js
- React + TypeScript
- Tailwind CSS
- Supabase (skema awal tersedia di `supabase/schema.sql`)

## Menjalankan

```bash
npm install
cp .env.example .env.local
npm run dev
```

Buka `http://localhost:3000`.

## Halaman
- `/` landing + simulator
- `/ajukan` multi-step application demo
- `/dashboard` dashboard pengguna demo
- `/admin` dashboard admin demo
- `/tentang`
- `/faq`
- `/hubungi-kami`
- `/kebijakan-privasi`
- `/syarat-layanan`
- `/disclaimer`

## Penting sebelum produksi
Versi ini sengaja tidak mengaktifkan OTP SMS, KYC/AML, verifikasi NIK, penyimpanan KTP, pencairan dana, atau keputusan kredit nyata. Jangan menganggap UI demo sebagai sistem pinjaman yang siap beroperasi.

Untuk produksi, implementasikan sekurang-kurangnya:
1. Supabase Auth + MFA/OTP melalui provider yang sesuai.
2. RLS dan authorization server-side untuk admin.
3. Penyimpanan dokumen privat dengan signed URL berumur pendek.
4. Enkripsi/secret management untuk data sangat sensitif.
5. Audit log dan monitoring.
6. KYC/identity verification dan fraud controls.
7. Payment/disbursement integration yang sah.
8. Legal review, perizinan, perlindungan konsumen, privasi, dan compliance OJK/AFPI sesuai model bisnis.
9. Jangan menampilkan klaim "berizin OJK", nomor izin, atau logo regulator sebelum benar-benar terverifikasi.

## Build APK lewat GitHub Actions

1. Upload seluruh isi proyek ini ke repository GitHub.
2. Pastikan branch utama bernama `main`.
3. Buka tab **Actions**.
4. Pilih workflow **Build PinjamBiru APK**.
5. Tekan **Run workflow** → pilih `main` → **Run workflow**.
6. Tunggu sampai job hijau.
7. Buka hasil workflow → bagian **Artifacts** → download `pinjambiru-debug-apk`.
8. Di dalam ZIP artifact terdapat `app-debug.apk`.

Workflow membuat Android project otomatis dengan Capacitor sehingga folder `android/` tidak perlu dibuat manual di HP.

### Jika tombol Run workflow tidak terlihat
Pastikan file `.github/workflows/build-apk.yml` sudah masuk ke branch `main`, lalu buka ulang tab Actions.
