import React from 'react';
import './imprint.css';

function Imprint() {
    return (
        <div className="imprint-container" style={{fontSize: '18px', marginTop: '-150px', textAlign: 'center', zIndex:201}}>
            <p style={{fontSize: '30px', zIndex:200}}>WO FINDE ICH NIKE UNTERNEHMENSINFORMATIONEN?</p>
            <p style={{zIndex:200}}>Nike.com wird von Nike Retail BV betrieben. Eingetragene Adresse:</p>
            <p>Nike Retail BV Colosseum 1 1213 NL Hilversum Niederlande</p>
            <p>Das Unternehmen ist eine Gesellschaft mit beschränkter Haftung nach niederländischem Recht, mit einem Stammkapital von 18.000 €.</p>
            <p>Registrierungsnummer bei der niederländischen Industrie- und Handelskammer: 32060874</p>
            <p>Umsatzsteuer-Identifikationsnummer: NL 8071.40.867.B01</p>
            <p>serviceinfo.de@nike.com</p>
            <p>Du hast jederzeit die Möglichkeit, uns telefonisch oder über den Chat zu kontaktieren, um über deine Anfrage zu sprechen und Echtzeitsupport zu erhalten.</p>
        </div>
    );
}

export default Imprint;
