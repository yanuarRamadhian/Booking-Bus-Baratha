import React from 'react';
import {useEffect} from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import OpeningOverlay from '../components/OpeningOverlay.jsx';
import BookingModal from '../components/BookingModal.jsx';
export default function Home() {
  useEffect(() => { import('../features/booking/booking.js'); import('../features/opening/opening.js'); }, []);
  return <><OpeningOverlay/><Header/><main id="beranda">
    <section className="hero">
      <div className="hero-grain"></div><div className="hero-ring ring-one"></div><div className="hero-ring ring-two"></div>
      <div className="shell hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="rule"></span> MENJELAJAH NUSANTARA DENGAN GAYA</div>
          <h1>Perjalanan yang<br/><em>berkesan</em> dimulai<br/>di sini.</h1>
          <p>Temukan perjalanan yang nyaman, pilih kursi favorit Anda, dan nikmati setiap kilometer bersama Bharata.</p>
          <div className="hero-actions"><a className="button button-gold" href="#jadwal">Cari Perjalanan <span aria-hidden="true">↗</span></a><a className="text-link" href="#trayek">Jelajahi trayek <span aria-hidden="true">→</span></a></div>
          <div className="hero-stats"><div><strong>6</strong><span>Kota tujuan</span></div><i></i><div><strong>54</strong><span>Jadwal contoh</span></div><i></i><div><strong>24/7</strong><span>Akses pemesanan</span></div></div>
        </div>
        <div className="hero-art" aria-label="Foto bus P.O Bharata hitam dan emas dengan motif wayang">
          <img className="hero-bus-photo" src="bus-bharata-wayang.png" alt="Bus P.O Bharata hitam dan emas dengan ilustrasi wayang di sisi bodi" width="1776" height="887" fetchPriority="high" />
          <div className="art-label">WARISAN DALAM SETIAP PERJALANAN <span>✦</span></div>
          <div className="art-bottom">DARI KOTA KE KOTA <span>01 / 03</span></div>
        </div>
      </div>
    </section>

    <section className="classes-section" id="kelas"><div className="shell">
      <div className="classes-heading"><div><span className="section-kicker">PILIH PENGALAMAN ANDA</span><h2>Tiga kelas,<br/><em>satu perjalanan berkesan.</em></h2></div><p>Dari kenyamanan klasik hingga kabin sleeper, pilih ruang istirahat yang paling sesuai dengan perjalanan Anda.</p></div>
      <figure className="class-fleet-photo"><img src="armada-kelas-bharata.png" alt="Tiga bus P.O Bharata untuk kelas Executive, Super Executive, dan Royal Executive di garasi saat senja" width="1776" height="887" loading="lazy" /><figcaption>ARMADA BHARATA · PILIH KELAS PERJALANAN ANDA</figcaption></figure>
      <div className="class-grid">
        <article className="class-card"><span className="class-index">01 / EXECUTIVE</span><div className="class-symbol" aria-hidden="true">✦</div><h3>Executive</h3><p>Kursi reclining yang nyaman untuk perjalanan antarkota.</p><div className="class-spec"><span>KURSI</span><strong>Reclining seat</strong></div><div className="class-spec"><span>KONFIGURASI</span><strong>2 + 2 · 40 kursi</strong></div><a href="#jadwal">Lihat jadwal <span aria-hidden="true">↗</span></a></article>
        <article className="class-card class-card-featured"><span className="class-index">02 / SUPER EXECUTIVE</span><div className="class-symbol" aria-hidden="true">✦</div><h3>Super Executive</h3><p>Ruang kaki lebih lega dengan leg rest untuk bersantai sepanjang jalan.</p><div className="class-spec"><span>KURSI</span><strong>Leg rest</strong></div><div className="class-spec"><span>KONFIGURASI</span><strong>2 + 1 · 30 kursi</strong></div><a href="#jadwal">Lihat jadwal <span aria-hidden="true">↗</span></a></article>
        <article className="class-card"><span className="class-index">03 / ROYAL EXECUTIVE</span><div className="class-symbol" aria-hidden="true">✦</div><h3>Royal Executive</h3><p>Kabin sleeper untuk beristirahat lebih leluasa hingga tiba di tujuan.</p><div className="class-spec"><span>KURSI</span><strong>Sleeper</strong></div><div className="class-spec"><span>KONFIGURASI</span><strong>1 + 1 · 20 kabin</strong></div><a href="#jadwal">Lihat jadwal <span aria-hidden="true">↗</span></a></article>
      </div>
      <div className="class-amenities"><div><span className="section-kicker">FASILITAS DI SETIAP KELAS</span><h3>Nyaman sampai tujuan.</h3></div><ul><li>Toilet khusus BAK</li><li>Smoking room</li><li>Dispenser air panas gratis untuk Pop Mie dan kopi</li></ul></div>
    </div></section>

    <section className="search-section" id="jadwal"><div className="shell">
      <div className="section-kicker">RENCANAKAN PERJALANAN</div><div className="section-heading-row"><div><h2>Ke mana kita <em>pergi?</em></h2><p>Pilih rute dan tanggal perjalanan Anda.</p></div><span className="demo-badge">JADWAL & HARGA CONTOH</span></div>
      <form id="search-form" className="search-card"><label><span>KOTA ASAL</span><select id="origin" required aria-label="Kota asal"></select></label><button type="button" id="swap" className="swap" aria-label="Tukar kota asal dan tujuan">⇄</button><label><span>KOTA TUJUAN</span><select id="destination" required aria-label="Kota tujuan"></select></label><label className="date-field"><span>TANGGAL BERANGKAT</span><input id="date" type="date" required /></label><button className="button button-dark search-button" type="submit">Cari Bus <span aria-hidden="true">→</span></button></form>
      <div className="results-head"><div><span className="section-kicker">JADWAL TERSEDIA</span><h3 id="results-title">Pilihan perjalanan</h3></div><span id="result-count"></span></div>
      <div id="schedules" className="schedules" aria-live="polite"></div>
    </div></section>

    <section className="routes-section" id="trayek"><div className="shell"><div className="routes-heading"><div><span className="section-kicker">JELAJAHI INDONESIA</span><h2>Trayek <em>pilihan.</em></h2></div><p>Dari pusat kota hingga destinasi favorit, temukan rute yang sesuai dengan rencana Anda.</p></div><div id="routes" className="route-grid"></div></div></section>

    <section className="benefits" id="tentang"><div className="shell benefit-layout"><div><span className="section-kicker">MENGAPA BHARATA</span><h2>Nyaman di jalan.<br/><em>Tenang di hati.</em></h2><p>Pengalaman pemesanan dirancang agar perjalanan terasa lebih mudah sejak Anda memilih tujuan.</p><a className="text-link" href="tentang.html">Kenali Bharata <span aria-hidden="true">→</span></a></div><div className="benefit-list"><article><span>01</span><div><h3>Jadwal yang jelas</h3><p>Lihat jam berangkat, durasi, dan perkiraan tiba sebelum memilih tiket.</p></div></article><article><span>02</span><div><h3>Kursi pilihan Anda</h3><p>Pilih posisi duduk langsung dari denah bus yang mudah dipahami.</p></div></article><article><span>03</span><div><h3>Pesan dengan mudah</h3><p>Isi detail penumpang dan simpan ringkasan pemesanan dalam beberapa langkah.</p></div></article></div></div></section>
  </main><Footer/><BookingModal/></>;
}
