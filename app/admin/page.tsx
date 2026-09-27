 "use client";
import { useState } from "react";
type App={id:string,name:string,amount:string,status:string};
export default function Admin(){
 const [rate,setRate]=useState("1.50"),[fee,setFee]=useState("1.00");
 const [apps,setApps]=useState<App[]>([
  {id:"PB-10021",name:"Pengguna Demo 1",amount:"Rp 3.000.000",status:"Menunggu Verifikasi"},
  {id:"PB-10022",name:"Pengguna Demo 2",amount:"Rp 5.000.000",status:"Menunggu Verifikasi"},
  {id:"PB-10023",name:"Pengguna Demo 3",amount:"Rp 1.500.000",status:"Menunggu Verifikasi"}
 ]);
 const update=(id:string,status:string)=>setApps(a=>a.map(x=>x.id===id?{...x,status}:x));
 return <main className="mx-auto max-w-6xl px-4 py-10 md:py-16"><div><p className="text-sm font-bold text-brand-600">ADMIN</p><h1 className="text-3xl font-black">Dashboard Admin</h1><p className="mt-2 text-slate-500">Data berikut adalah dummy. Jangan jadikan halaman ini sebagai kontrol produksi tanpa autentikasi dan otorisasi server-side.</p></div>
 <section className="mt-8 grid gap-4 md:grid-cols-2"><div className="card p-6"><h2 className="font-black">Atur parameter produk</h2><div className="mt-5 grid gap-4 sm:grid-cols-2"><label><span className="label">Bunga contoh / bulan (%)</span><input className="field" value={rate} onChange={e=>setRate(e.target.value)}/></label><label><span className="label">Biaya layanan contoh (%)</span><input className="field" value={fee} onChange={e=>setFee(e.target.value)}/></label></div><p className="mt-4 text-xs text-slate-500">Nilai produksi harus melalui governance/compliance dan mengikuti ketentuan yang berlaku.</p></div><div className="card p-6"><p className="text-sm text-slate-500">Parameter aktif demo</p><p className="mt-2 text-2xl font-black">{rate}% + {fee}%</p></div></section>
 <section className="card mt-8 p-6"><h2 className="text-xl font-black">Pengajuan masuk</h2><div className="mt-5 space-y-3">{apps.map(a=><div key={a.id} className="grid gap-3 rounded-2xl bg-slate-50 p-4 md:grid-cols-[1fr_auto_auto] md:items-center"><div><b>{a.name}</b><p className="text-xs text-slate-500">{a.id} · {a.amount}</p></div><span className="rounded-full bg-white px-3 py-2 text-xs font-bold">{a.status}</span><div className="flex gap-2"><button onClick={()=>update(a.id,"Disetujui")} className="rounded-xl bg-emerald-600 px-3 py-2 text-xs font-bold text-white">Approve</button><button onClick={()=>update(a.id,"Ditolak")} className="rounded-xl bg-rose-600 px-3 py-2 text-xs font-bold text-white">Reject</button></div></div>)}</div></section>
 </main>
}