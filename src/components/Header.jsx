import React from 'react';
export default function Header({about=false}) { return about ? (<header className="site-header">
    <div className="shell nav-wrap">
      <a className="brand" href="index.html#beranda" aria-label="P.O Bus Bharata, kembali ke beranda">
        <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 64 64"><path d="M32 5c8 8 11 15 8 22l11 4-9 5 6 15-16-8-16 8 6-15-9-5 11-4C21 20 24 13 32 5Z"/><path d="M22 30c7-5 13-5 20 0M27 35l5 3 5-3M24 19l8 4 8-4"/></svg></span>
        <span><strong>BHARATA</strong><small>P.O BUS · NUSANTARA</small></span>
      </a>
      <nav className="desktop-nav" aria-label="Navigasi utama"><a href="index.html#jadwal">Jadwal Bus</a><a href="index.html#trayek">Trayek</a><a href="tentang.html" aria-current="page">Tentang Kami</a></nav>
      <a className="mobile-about-link" href="index.html">Beranda</a><a className="nav-cta" href="index.html#jadwal">Pesan Tiket <span aria-hidden="true">↗</span></a>
    </div>
  </header>) : (<header className="site-header">
    <div className="shell nav-wrap">
      <a className="brand" href="#beranda" aria-label="P.O Bus Bharata, kembali ke beranda">
        <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 64 64"><path d="M32 5c8 8 11 15 8 22l11 4-9 5 6 15-16-8-16 8 6-15-9-5 11-4C21 20 24 13 32 5Z"/><path d="M22 30c7-5 13-5 20 0M27 35l5 3 5-3M24 19l8 4 8-4"/></svg></span>
        <span><strong>BHARATA</strong><small>P.O BUS · NUSANTARA</small></span>
      </a>
      <nav className="desktop-nav" aria-label="Navigasi utama"><a href="#jadwal">Jadwal Bus</a><a href="#kelas">Kelas Bus</a><a href="#trayek">Trayek</a><a href="tentang.html">Tentang Kami</a></nav>
      <a className="mobile-about-link" href="tentang.html">Tentang</a><a className="nav-cta" href="#jadwal">Pesan Tiket <span aria-hidden="true">↗</span></a>
    </div>
  </header>); }
