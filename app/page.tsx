import Link from "next/link";
import Simulator from "./simulator";

const advantages = [
  ["⚡", "Proses digital", "Pengajuan dirancang sederhana dan mudah diikuti."],
  ["🔐", "Perlindungan data", "Arsitektur siap dihubungkan dengan autentikasi dan penyimpanan aman."],
  ["📱", "Mobile-first", "Nyaman digunakan dari ponsel maupun desktop."],
  ["📄", "Informasi transparan", "Simulasi menampilkan pokok, bunga, biaya, dan estimasi angsuran."]
];

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <span className="rounded-full bg-white/15 px-3 py-1 text-sm">Pendanaan digital yang transparan</span>
            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">Butuh dana? Mulai dengan simulasi yang jelas.</h1>
            <p className="mt-5 max-w-xl text-lg text-blue-50">PinjamBiru adalah prototipe platform pengajuan pendanaan dengan pengalaman sederhana, transparan, dan dibuat untuk layar ponsel.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/ajukan" className="rounded-2xl bg-white px-5 py-3 font-bold text-brand-700">Ajukan Sekarang</Link>
              <Link href="#simulasi" className="rounded-2xl border border-white/40 px-5 py-3 font-semibold">Coba Simulasi</Link>
            </div>
            <p className="mt-6 text-xs text-blue-100">Peringatan: layanan pinjaman/pendanaan harus memiliki status perizinan yang sesuai dan mematuhi ketentuan OJK serta ketentuan AFPI yang berlaku.</p>
          </div>
          <div className="card p-5 text-slate-900">
            <div className="mb-4 flex items-center justify-between"><b>Ringkasan simulasi</b><span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">Demo</span></div>
            <Simulator compact />
          </div>
        </div>
      </section>

      <section id="keunggulan" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-black">Kenapa PinjamBiru?</h2>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map(([icon,title,desc]) => <div key={title} className="card p-6"><div className="text-3xl">{icon}</div><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{desc}</p></div>)}
        </div>
      </section>

      <section id="simulasi" className="bg-brand-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-7"><span className="text-sm font-bold text-brand-600">SIMULATOR</span><h2 className="text-3xl font-black">Simulasi pinjaman</h2><p className="mt-2 text-slate-600">Angka di bawah adalah contoh dan harus disesuaikan dengan produk serta batas biaya yang sah.</p></div>
          <Simulator />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-black">Apa kata pengguna demo?</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {[
            ["Rina", "Tampilannya mudah dipahami dan simulasi langsung berubah."],
            ["Andi", "Form pengajuan bertahap terasa lebih sederhana di HP."],
            ["Dewi", "Informasi biaya dan risiko terlihat jelas sebelum lanjut."]
          ].map(([name,text]) => <div key={name} className="card p-6"><div className="text-amber-500">★★★★★</div><p className="mt-3 text-slate-600">“{text}”</p><p className="mt-4 text-sm font-bold">{name}</p></div>)}
        </div>
      </section>
    </main>
  );
}