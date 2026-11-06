const cities = ['Jakarta', 'Bandung', 'Cirebon', 'Semarang', 'Yogyakarta', 'Surabaya'];
const routes = [
  ['Jakarta','Yogyakarta',8.5,285000],['Jakarta','Semarang',7,245000],['Jakarta','Bandung',3,125000],
  ['Bandung','Yogyakarta',8,275000],['Bandung','Cirebon',3.5,155000],['Cirebon','Semarang',4.5,175000],
  ['Semarang','Surabaya',5.5,215000],['Yogyakarta','Surabaya',6.5,235000],['Jakarta','Surabaya',11.5,365000]
];
const trips = routes.flatMap(([from,to,hours,price], index) => [
  {id:`${index}-a`,from,to,hours,price,time:index%3===0?'19:30':index%3===1?'20:00':'07:00',service:'Bharata Executive',facilities:'AC · Reclining seat · USB',offset:0},
  {id:`${index}-b`,from:to,to:from,hours,price,time:index%2===0?'18:45':'08:30',service:'Bharata Executive',facilities:'AC · Reclining seat · USB',offset:1}
]);
const $ = id => document.getElementById(id);
const rupiah = n => new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(n);
const dateLong = d => new Intl.DateTimeFormat('id-ID',{weekday:'long',day:'numeric',month:'long',year:'numeric',timeZone:'Asia/Jakarta'}).format(d);
const dateShort = d => new Intl.DateTimeFormat('id-ID',{weekday:'short',day:'numeric',month:'short',timeZone:'Asia/Jakarta'}).format(d);
const clean = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const dateFrom = (date,time='00:00') => new Date(`${date}T${time}:00+07:00`);
const todayJakarta = () => new Intl.DateTimeFormat('en-CA',{year:'numeric',month:'2-digit',day:'2-digit',timeZone:'Asia/Jakarta'}).format(new Date());
const modal = $('booking-modal');
let currentTrip = null, selectedSeats = [], step = 'seats', lastFocus = null;

function bookings(){try{return JSON.parse(localStorage.getItem('bharata-bookings')||'[]')}catch{return []}}
function saveBooking(booking){try{localStorage.setItem('bharata-bookings',JSON.stringify([...bookings(),booking]))}catch{}}
function tripKey(trip,date){return `${trip.id}-${date}`}
function occupiedSeats(trip,date){
  const fixed = ['1B','2D','3A','5C','7B','8D','9A'].filter((_,i)=>(i+trip.offset)%3!==1);
  return [...new Set([...fixed,...bookings().filter(b=>b.tripKey===tripKey(trip,date)).flatMap(b=>b.seats)])];
}
function arrival(trip,date){return new Date(dateFrom(date,trip.time).getTime()+trip.hours*3600000)}
function formatHour(d){return new Intl.DateTimeFormat('id-ID',{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'Asia/Jakarta'}).format(d)}

function setup(){
  for(const id of ['origin','destination']) $(id).innerHTML=cities.map(c=>`<option value="${c}">${c}</option>`).join('');
  $('origin').value='Jakarta';$('destination').value='Yogyakarta';$('date').min=todayJakarta();$('date').value=todayJakarta();
  $('search-form').addEventListener('submit',e=>{e.preventDefault();renderTrips();$('results-title').scrollIntoView({behavior:'smooth',block:'center'})});
  $('swap').addEventListener('click',()=>{const a=$('origin').value;$('origin').value=$('destination').value;$('destination').value=a;renderTrips()});
  $('origin').addEventListener('change',renderTrips);$('destination').addEventListener('change',renderTrips);$('date').addEventListener('change',renderTrips);
  document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',closeModal));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)closeModal()});
  renderTrips();renderRoutes();
}
function renderTrips(){
  const from=$('origin').value,to=$('destination').value,date=$('date').value;
  const matches=from===to?[]:trips.filter(t=>t.from===from&&t.to===to).sort((a,b)=>a.time.localeCompare(b.time));
  $('results-title').textContent=`${from} → ${to}`;$('result-count').textContent=`${matches.length} perjalanan · ${dateLong(dateFrom(date))}`;
  $('schedules').innerHTML=matches.length?matches.map(t=>{
    const a=arrival(t,date),available=40-occupiedSeats(t,date).length;
    return `<article class="schedule-card"><div><div class="service-label">LAYANAN EKSEKUTIF</div><div class="service-name">${t.service}</div><div class="service-facilities">${t.facilities}</div></div><div class="schedule-timeline"><div class="time-block"><strong>${t.time}</strong><span>${t.from}<br>${dateShort(dateFrom(date))}</span></div><div class="time-line"><span>${t.hours} jam</span></div><div class="time-block time-end"><strong>${formatHour(a)}</strong><span>${t.to}<br>${dateShort(a)}</span></div></div><div class="price-box"><div><small>Mulai dari / kursi</small><strong>${rupiah(t.price)}</strong></div><button type="button" data-trip="${t.id}" ${available===0?'disabled':''}>${available===0?'Kursi penuh':`Pilih kursi (${available}) <span>→</span>`}</button></div></article>`;
  }).join(''):`<div class="empty-state"><strong>Belum ada jadwal untuk rute ini.</strong><span>Coba tukar kota atau pilih trayek lain yang tersedia di bawah.</span></div>`;
  document.querySelectorAll('[data-trip]').forEach(b=>b.addEventListener('click',()=>openBooking(trips.find(t=>t.id===b.dataset.trip))));
}
function renderRoutes(){
  $('routes').innerHTML=routes.slice(0,6).map(([from,to,hours,price],i)=>`<article class="route-card"><span>TRAYEK ${String(i+1).padStart(2,'0')}</span><h3>${from} <span style="color:#b49762">→</span> ${to}</h3><p>Estimasi ${hours} jam · Mulai ${rupiah(price)}</p><button type="button" data-route="${i}">Lihat jadwal &nbsp;→</button></article>`).join('');
  document.querySelectorAll('[data-route]').forEach(b=>b.addEventListener('click',()=>{const [from,to]=routes[Number(b.dataset.route)];$('origin').value=from;$('destination').value=to;renderTrips();$('jadwal').scrollIntoView({behavior:'smooth'})}));
}
function openBooking(trip){currentTrip=trip;selectedSeats=[];step='seats';lastFocus=document.activeElement;modal.hidden=false;document.body.style.overflow='hidden';renderModal();modal.querySelector('.modal-close').focus()}
function closeModal(){modal.hidden=true;document.body.style.overflow='';currentTrip=null;lastFocus?.focus();renderTrips()}
function seatMarkup(){
  const taken=occupiedSeats(currentTrip,$('date').value);
  return Array.from({length:10},(_,r)=>['A','B',null,'C','D'].map(letter=>letter?`<button type="button" class="seat ${selectedSeats.includes(`${r+1}${letter}`)?'selected':''}" data-seat="${r+1}${letter}" ${taken.includes(`${r+1}${letter}`)?'disabled':''} aria-pressed="${selectedSeats.includes(`${r+1}${letter}`)}" aria-label="Kursi ${r+1}${letter}${taken.includes(`${r+1}${letter}`)?', terisi':''}">${r+1}${letter}</button>`:'<span class="aisle"></span>').join('')).join('');
}
function summary(){const date=$('date').value,a=arrival(currentTrip,date);return `<aside class="booking-summary"><h3>Ringkasan perjalanan</h3><div class="summary-row"><span>Trayek</span><b>${currentTrip.from} → ${currentTrip.to}</b></div><div class="summary-row"><span>Berangkat</span><b>${dateShort(dateFrom(date))}<br>${currentTrip.time} WIB</b></div><div class="summary-row"><span>Estimasi tiba</span><b>${dateShort(a)}<br>${formatHour(a)} WIB</b></div><div class="summary-row"><span>Kursi</span><b>${selectedSeats.join(', ')||'Belum dipilih'}</b></div><div class="summary-total"><span>Total</span><strong>${rupiah(currentTrip.price*selectedSeats.length)}</strong></div><button type="button" class="button" id="continue" ${selectedSeats.length?'':'disabled'}>${step==='seats'?'Lanjutkan':'Konfirmasi pesanan'} <span>→</span></button></aside>`}
function renderModal(){
  if(step==='seats'){
    $('modal-content').innerHTML=`<span class="modal-kicker">LANGKAH 01 / 02 · PILIH KURSI</span><h2 id="modal-title">Kursi favorit Anda.</h2><p class="modal-sub">Pilih hingga 4 kursi yang tersedia. Bagian depan bus berada di atas.</p><div class="booking-layout"><div class="seat-area"><div class="seat-top"><strong>Denah kursi · 2 + 2</strong><span>40 kursi</span></div><div class="seat-bus"><div class="driver">PENGEMUDI</div><div class="seat-grid">${seatMarkup()}</div></div><div class="seat-legend"><span><i></i>Tersedia</span><span><i class="selected"></i>Dipilih</span><span><i class="taken"></i>Terisi</span></div></div>${summary()}</div>`;
    document.querySelectorAll('[data-seat]').forEach(b=>b.addEventListener('click',()=>{const s=b.dataset.seat;if(selectedSeats.includes(s))selectedSeats=selectedSeats.filter(x=>x!==s);else if(selectedSeats.length<4)selectedSeats.push(s);else{alert('Maksimal 4 kursi dalam satu pemesanan.');return}renderModal()}));
    $('continue').addEventListener('click',()=>{step='details';renderModal()});
  }else{
    $('modal-content').innerHTML=`<span class="modal-kicker">LANGKAH 02 / 02 · DATA PENUMPANG</span><h2 id="modal-title">Hampir berangkat.</h2><p class="modal-sub">Lengkapi data kontak dan nama untuk setiap kursi.</p><div class="booking-layout"><div><button type="button" class="back-button" id="back">← Kembali pilih kursi</button><form id="passenger-form" class="passenger-form"><label>Nama pemesan<input name="name" autocomplete="name" required maxlength="80" placeholder="Nama lengkap" /></label><label>Nomor WhatsApp<input name="phone" type="tel" inputmode="tel" required pattern="[+0-9 ]{9,17}" maxlength="17" placeholder="08xxxxxxxxxx" /></label><label>Email<input name="email" type="email" autocomplete="email" required placeholder="nama@email.com" /></label>${selectedSeats.map((s,i)=>`<label>Nama penumpang · Kursi ${s}<input name="passenger-${i}" required maxlength="80" placeholder="Nama sesuai identitas" /></label>`).join('')}<p class="form-note">Pemesanan ini adalah simulasi. Data hanya disimpan di peramban ini; belum ada pembayaran atau tiket resmi.</p><button class="button button-dark" type="submit">Simpan pemesanan <span>→</span></button></form></div>${summary()}</div>`;
    $('back').addEventListener('click',()=>{step='seats';renderModal()});$('continue').addEventListener('click',()=>{if($('passenger-form').reportValidity())$('passenger-form').requestSubmit()});
    $('passenger-form').addEventListener('submit',submitBooking);
  }
}
function submitBooking(e){
  e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return;
  const date=$('date').value;const occupied=occupiedSeats(currentTrip,date);if(selectedSeats.some(s=>occupied.includes(s))){alert('Salah satu kursi sudah terisi. Silakan pilih ulang.');step='seats';selectedSeats=[];renderModal();return}
  const data=new FormData(form),code=`BHR-${Date.now().toString(36).toUpperCase().slice(-7)}`;
  const booking={code,tripKey:tripKey(currentTrip,date),date,tripId:currentTrip.id,seats:[...selectedSeats],name:String(data.get('name')).trim(),phone:String(data.get('phone')).trim(),email:String(data.get('email')).trim(),passengers:selectedSeats.map((_,i)=>String(data.get(`passenger-${i}`)).trim()),createdAt:new Date().toISOString()};
  saveBooking(booking);const a=arrival(currentTrip,date);
  $('modal-content').innerHTML=`<div class="success-box"><div class="success-icon">✓</div><span class="modal-kicker">PEMESANAN TERSIMPAN</span><h2 id="modal-title">Sampai jumpa di perjalanan.</h2><p>Ringkasan simulasi pemesanan Anda sudah tersimpan di peramban ini.</p><div class="ticket-code">${code}</div><div class="ticket-detail"><div><b>Rute</b> ${currentTrip.from} → ${currentTrip.to}</div><div><b>Berangkat</b> ${dateLong(dateFrom(date))}, ${currentTrip.time} WIB</div><div><b>Estimasi tiba</b> ${dateLong(a)}, ${formatHour(a)} WIB</div><div><b>Kursi</b> ${selectedSeats.join(', ')}</div><div><b>Pemesan</b> ${clean(booking.name)}</div><div><b>Total</b> ${rupiah(currentTrip.price*selectedSeats.length)}</div></div><p class="form-note">Ini bukan tiket resmi. Konfirmasi, pembayaran, dan ketersediaan nyata memerlukan sistem operasional P.O Bus Bharata.</p><div class="success-actions"><button type="button" id="print">Cetak ringkasan</button><button type="button" id="done">Selesai</button></div></div>`;
  $('print').addEventListener('click',()=>window.print());$('done').addEventListener('click',closeModal);
}
setup();
