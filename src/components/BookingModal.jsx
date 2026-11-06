import React from 'react';
export default function BookingModal() { return (<div id="booking-modal" className="modal" hidden><div className="modal-backdrop" data-close></div><div className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" type="button" data-close aria-label="Tutup">×</button><div id="modal-content"></div></div></div>); }
