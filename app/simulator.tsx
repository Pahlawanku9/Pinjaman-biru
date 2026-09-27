 "use client";
import { useMemo, useState } from "react";

function rupiah(n:number){ return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n); }

export default function Simulator({compact=false}:{compact?:boolean}) {
  const [amount,setAmount] = useState(2500000);
  const [months,setMonths] = useState(6);
  const rate = 1.5; // demo monthly rate
  const feeRate = 1; // demo service fee
  const interest = amount * (rate/100) * months;
  const fee = amount * (feeRate/100);
  const total = amount + interest + fee;
  const installment = total/months;
  return <div className={compact ? "" : "card bg-white p-6 md:p-8"}>
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <label className="label">Jumlah pinjaman</label>
        <input type="range" min="500000" max="10000000" step="500000" value={amount} onChange={e=>setAmount(+e.target.value)} className="w-full accent-blue-600"/>
        <div className="mt-2 flex justify-between text-xs text-slate-500"><span>Rp500 ribu</span><span>Rp10 juta</span></div>
        <div className="mt-3 text-2xl font-black text-brand-700">{rupiah(amount)}</div>
        <label className="label mt-7">Tenor: {months} bulan</label>
        <input type="range" min="3" max="12" step="1" value={months} onChange={e=>setMonths(+e.target.value)} className="w-full accent-blue-600"/>
        <div className="mt-2 flex justify-between text-xs text-slate-500"><span>3 bulan</span><span>12 bulan</span></div>
      </div>
      <div className="rounded-3xl bg-brand-50 p-5">
        <p className="text-sm text-slate-500">Estimasi angsuran per bulan</p>
        <p className="mt-1 text-3xl font-black text-brand-700">{rupiah(installment)}</p>
        <div className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between"><span>Pokok</span><b>{rupiah(amount)}</b></div>
          <div className="flex justify-between"><span>Bunga contoh ({rate}%/bulan)</span><b>{rupiah(interest)}</b></div>
          <div className="flex justify-between"><span>Biaya layanan contoh ({feeRate}%)</span><b>{rupiah(fee)}</b></div>
          <div className="border-t border-brand-100 pt-3 flex justify-between"><span>Total kewajiban contoh</span><b>{rupiah(total)}</b></div>
        </div>
        <p className="mt-5 text-xs leading-5 text-slate-500">Ini hanya kalkulator demo, bukan penawaran kredit. Suku bunga, biaya, pajak, batas maksimum biaya, dan metode perhitungan harus mengikuti produk yang sah dan ketentuan regulator.</p>
      </div>
    </div>
  </div>
}