import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "PinjamBiru — Solusi Pendanaan Digital",
  description: "Prototipe aplikasi pendanaan digital mobile-first."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-2 font-extrabold text-brand-700">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white">PB</span>
              <span>PinjamBiru</span>
            </Link>
            <nav className="hidden gap-6 text-sm font-medium md:flex">
              <Link href="/#simulasi">Simulasi</Link>
              <Link href="/#keunggulan">Keunggulan</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/hubungi-kami">Hubungi Kami</Link>
            </nav>
            <Link href="/ajukan" className="btn-primary px-4 py-2 text-sm">Ajukan Sekarang</Link>
          </div>
        </header>
        {children}
        <footer className="mt-16 border-t border-slate-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4">
            <div><b className="text-brand-700">PinjamBiru</b><p className="mt-2 text-sm text-slate-500">Prototipe antarmuka pendanaan digital. Bukan penyelenggara pinjaman yang berizin secara otomatis.</p></div>
            <div><b>Tentang</b><div className="mt-3 space-y-2 text-sm text-slate-600"><Link className="block" href="/tentang">Tentang Kami</Link><Link className="block" href="/faq">FAQ</Link></div></div>
            <div><b>Legal</b><div className="mt-3 space-y-2 text-sm text-slate-600"><Link className="block" href="/kebijakan-privasi">Kebijakan Privasi</Link><Link className="block" href="/syarat-layanan">Syarat Layanan</Link><Link className="block" href="/disclaimer">Disclaimer Risiko</Link></div></div>
            <div><b>Kontak</b><p className="mt-3 text-sm text-slate-600">Layanan pelanggan: support@contoh.id</p><p className="mt-2 text-xs text-slate-500">Status izin dan informasi regulator wajib diisi berdasarkan kondisi hukum sebenarnya.</p></div>
          </div>
          <div className="border-t border-slate-100 py-4 text-center text-xs text-slate-500">© 2026 PinjamBiru. Prototipe/demo.</div>
        </footer>
      </body>
    </html>
  );
}