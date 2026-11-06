import React from 'react';
import {useEffect} from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import OpeningOverlay from '../components/OpeningOverlay.jsx';
export default function About() {
  useEffect(() => { import('../features/opening/opening.js'); }, []);
  return <><OpeningOverlay/><Header about/><main>
    <section className="about-intro">
      <div className="shell about-intro-inner">
        <div><span className="section-kicker">MENGENAL BHARATA</span><h1>Perjalanan yang<br/><em>terasa dekat.</em></h1></div>
        <p>Setiap perjalanan punya cerita. Kami ingin langkah pertama Anda menuju tujuan terasa hangat, nyaman, dan penuh semangat Nusantara.</p>
      </div>
    </section>

    <section className="about-banner" aria-label="Bus Bharata dan sapaan hangat kondektur">
      <img src="bharata-sapaan-hangat.png" alt="Bus P.O Bharata hitam dan emas berhias wayang, dengan kondektur menyambut penumpang di depan pintu" width="1776" height="887" fetchPriority="high" />
      <div className="banner-caption"><span>BHARATA · CERITA DI SETIAP KILOMETER</span><strong>Selamat datang di perjalanan Anda.</strong></div>
    </section>

    <section className="about-story">
      <div className="shell story-grid">
        <div><span className="section-kicker">CERITA KAMI</span><h2>Lebih dari<br/>sekadar <em>tujuan.</em></h2></div>
        <div className="story-copy"><p>Bharata hadir dengan semangat menjadikan perjalanan antarkota sebagai bagian yang menyenangkan dari cerita Anda. Sejak mencari jadwal hingga memilih kursi, setiap langkah dirancang agar terasa sederhana dan jelas.</p><p>Warna hitam dan emas memberi karakter yang tenang dan elegan. Motif wayang menjadi sentuhan Nusantara yang menyertai perjalanan dari kota ke kota.</p><a className="story-link" href="#visi-misi">Kenali visi dan misi kami <span aria-hidden="true">↘</span></a></div>
      </div>
    </section>

    <section className="purpose-section" id="visi-misi">
      <div className="shell">
        <div className="purpose-heading"><span className="section-kicker">ARAH PERJALANAN KAMI</span><h2>Visi &amp; <em>misi.</em></h2><p>Filosofi pewayangan dan semangat Nusantara menjadi landasan perjalanan Bharata.</p></div>
        <div className="vision-panel"><div><span className="purpose-number">01 / VISI</span><h3>Melangkah<br/>lebih jauh.</h3></div><p>Menjadi perusahaan otobus terdepan di Indonesia yang menghadirkan standar kenyamanan modern berkelas, dengan menjunjung tinggi nilai keluhuran budaya wayang dan kearifan Nusantara di setiap jengkal lintasan jalan raya.</p></div>
        <div className="mission-heading"><span className="purpose-number">02 / MISI</span><p>Empat komitmen yang mengarahkan cara Bharata melayani dan melaju.</p></div>
        <div className="mission-grid">
          <article><span>01</span><div><h3>Menghadirkan Perjalanan Berjiwa Ksatria</h3><small>KESELAMATAN &amp; DISIPLIN</small><p>Menerapkan standar keselamatan berkendara tingkat tinggi melalui armada prima (seperti kenyamanan dan teknologi bodi Jetbus 5) serta awak bus yang berintegritas, andal, dan memegang teguh etika ksatria jalanan.</p></div></article>
          <article><span>02</span><div><h3>Melayani dengan Kehangatan Nusantara</h3><small>PELAYANAN PRIMA</small><p>Menyuguhkan keramahan khas tradisi Nusantara (<em>grapyak semanak</em>) dalam setiap titik sentuh layanan, memastikan setiap penumpang merasa dihargai layaknya tamu kehormatan.</p></div></article>
          <article><span>03</span><div><h3>Menjaga dan Menggemakan Budaya Bangsa</h3><small>PELESTARIAN SENI</small><p>Menjadikan armada bus bukan sekadar alat transportasi, melainkan kanvas budaya berjalan yang mengenalkan keelokan wayang, estetika batik, dan filosofi luhur leluhur kepada masyarakat luas di sepanjang rute perjalanan.</p></div></article>
          <article><span>04</span><div><h3>Kenyamanan Modern Berdaya Saing Tinggi</h3><small>INOVASI &amp; FASILITAS</small><p>Memadukan fasilitas kabin modern, kebersihan optimal, dan ketepatan waktu dengan sentuhan interior bernuansa etnik Nusantara yang tenang dan elegan.</p></div></article>
        </div>
      </div>
    </section>

    <section className="fleet-section" id="armada">
      <div className="shell">
        <div className="fleet-heading"><div><span className="section-kicker">KESIAPAN ARMADA</span><h2>Armada mumpuni.<br/><em>Perjalanan lebih tenang.</em></h2></div><p>Keandalan perjalanan dimulai sebelum bus berangkat. Kesiapan armada menjadi perhatian melalui pengecekan teknisi dan pengelolaan uji KIR.</p></div>
        <figure className="fleet-photo"><img src="armada-bharata-garasi.png" alt="Deretan bus P.O Bharata hitam dan emas di garasi saat senja" width="1776" height="887" loading="lazy" /><figcaption>SIAP MENYAMBUT PERJALANAN BERIKUTNYA <span>✦</span></figcaption></figure>
        <div className="fleet-principles"><article><span>01 / PENGECEKAN TEKNISI</span><h3>Diperiksa sebelum melaju</h3><p>Proses pengecekan oleh teknisi menjadi bagian dari persiapan armada untuk perjalanan.</p></article><article><span>02 / PERHATIAN PADA KIR</span><h3>Kelayakan tetap diperhatikan</h3><p>Jadwal dan persyaratan uji KIR diperhatikan sebagai bagian dari pengelolaan kesiapan kendaraan.</p></article></div>
      </div>
    </section>

    <section className="about-values" id="nilai"><div className="shell"><div className="values-title"><span className="section-kicker">NILAI UTAMA</span><h2>Tridharma <em>Bharata.</em></h2><p>Tiga nilai yang membentuk karakter perjalanan kami.</p></div><div className="values-grid"><article><span>01 / GAGAH &amp; AMANAH</span><h3>Bhadrika</h3><p>Ketangguhan armada serta keandalan kru dalam menjaga keselamatan dan kepercayaan penumpang dari titik keberangkatan hingga tujuan.</p></article><article><span>02 / KEPEMIMPINAN &amp; KETENANGAN</span><h3>Hastabrata</h3><p>Sikap pengemudi dan kru yang matang, sabar, dan bijaksana dalam menghadapi dinamika jalur jalan raya.</p></article><article><span>03 / HARMONI &amp; KENYAMANAN</span><h3>Laras</h3><p>Keselarasan antara teknologi modern bus dengan keteduhan suasana perjalanan yang ramah budaya.</p></article></div></div></section>

    <section className="about-cta"><div className="shell about-cta-inner"><div><span className="section-kicker">MARI BERANGKAT</span><h2>Cerita berikutnya<br/><em>menunggu Anda.</em></h2></div><a className="button button-gold" href="index.html#jadwal">Lihat jadwal bus <span aria-hidden="true">↗</span></a></div></section>
  </main><Footer about/></>;
}
