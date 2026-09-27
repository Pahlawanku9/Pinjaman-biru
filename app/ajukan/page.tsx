 "use client";
import { useState } from "react";
import Link from "next/link";

const steps = ["Data Pribadi","Pekerjaan","Rekening","KTP & Persetujuan"];
export default function ApplyPage(){
  const [step,setStep]=useState(0);
  const [done,setDone]=useState(false);
  const [file,setFile]=useState<File|null>(null);
  const [form,setForm]=useState({nik:"",name:"",phone:"",job:"",income:"",bank:"",account:"",accountName:"",consent:false});
  const set=(k:string,v:string|boolean)=>setForm(x=>({...x,[k]:v}));
  if(done) return <main className="mx-auto max-w-2xl px-4 py-20"><div className="card p-8 text-center"><div className="text-5xl">✓</div><h1 className="mt-4 text-3xl font-black">Pengajuan tersimpan sebagai demo</h1><p className="mt-3 text-slate-600">Status awal: Menunggu Verifikasi. Pada sistem nyata, data harus diproses melalui backend aman dan alur verifikasi yang sesuai.</p><Link href="/dashboard" className="btn-primary mt-7">Buka Dashboard</Link></div></main>;
  const next=()=>setStep(s=>Math.min(3,s+1));
  const prev=()=>setStep(s=>Math.max(0,s-1));
  return <main className="mx-auto max-w-3xl px-4 py-10 md:py-16">
    <div className="mb-8"><p className="text-sm font-bold text-brand-600">PENGAJUAN DEMO</p><h1 className="text-3xl font-black">Ajukan pendanaan</h1><p className="mt-2 text-slate-600">Jangan masukkan NIK/KTP asli ke prototipe ini.</p></div>
    <div className="mb-8 grid grid-cols-4 gap-2">{steps.map((s,i)=><div key={s} className={"rounded-xl p-2 text-center text-xs font-bold "+(i===step?"bg-brand-600 text-white":"bg-slate-100 text-slate-500")}><span className="hidden sm:inline">{i+1}. </span>{s}</div>)}</div>
    <div className="card p-6 md:p-8">
      {step===0 && <div className="space-y-5"><Field label="NIK (demo)" value={form.nik} onChange={v=>set("nik",v)} placeholder="Masukkan NIK contoh, bukan NIK asli"/><Field label="Nama lengkap" value={form.name} onChange={v=>set("name",v)} placeholder="Nama lengkap"/><Field label="Nomor HP" value={form.phone} onChange={v=>set("phone",v)} placeholder="08xxxxxxxxxx"/></div>}
      {step===1 && <div className="space-y-5"><Field label="Pekerjaan" value={form.job} onChange={v=>set("job",v)} placeholder="Contoh: Karyawan swasta"/><Field label="Penghasilan bulanan" value={form.income} onChange={v=>set("income",v)} placeholder="Contoh: 5000000" type="number"/></div>}
      {step===2 && <div className="space-y-5"><div><label className="label">Bank</label><select className="field" value={form.bank} onChange={e=>set("bank",e.target.value)}><option value="">Pilih bank</option><option>Bank BCA</option><option>Bank Mandiri</option><option>Bank BNI</option><option>Bank BRI</option><option>Bank lainnya</option></select></div><Field label="Nomor rekening" value={form.account} onChange={v=>set("account",v)} placeholder="Nomor rekening demo"/><Field label="Nama pemilik rekening" value={form.accountName} onChange={v=>set("accountName",v)} placeholder="Sesuai rekening"/></div>}
      {step===3 && <div className="space-y-5">
        <div><label className="label">Upload KTP (demo)</label><label className="flex min-h-36 cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-brand-200 bg-brand-50 p-5 text-center"><span className="text-3xl">📄</span><b className="mt-2 text-brand-700">{file?file.name:"Pilih file KTP"}</b><span className="mt-1 text-xs text-slate-500">JPG/PNG, maksimal sesuai kebijakan sistem nyata</span><input type="file" accept="image/*" className="hidden" onChange={e=>setFile(e.target.files?.[0]||null)}/></label></div>
        <label className="flex gap-3 text-sm"><input type="checkbox" checked={form.consent} onChange={e=>set("consent",e.target.checked)} className="mt-1"/><span>Saya menyetujui Syarat Layanan dan Kebijakan Privasi serta memahami risiko pendanaan.</span></label>
      </div>}
      <div className="mt-8 flex justify-between gap-3"><button onClick={prev} disabled={step===0} className="btn-secondary disabled:opacity-40">Kembali</button>{step<3?<button onClick={next} className="btn-primary">Lanjut</button>:<button disabled={!form.consent} onClick={()=>setDone(true)} className="btn-primary disabled:opacity-40">Kirim Pengajuan Demo</button>}</div>
    </div>
    <p className="mt-5 text-xs leading-5 text-slate-500">OTP SMS, enkripsi aplikasi, verifikasi NIK, pemeriksaan KYC/AML, audit log, penyimpanan KTP, dan pencairan belum diaktifkan pada prototipe.</p>
  </main>
}
function Field({label,value,onChange,placeholder,type="text"}:{label:string,value:string,onChange:(v:string)=>void,placeholder:string,type?:string}){return <div><label className="label">{label}</label><input className="field" type={type} value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder}/></div>}