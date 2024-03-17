import OpenStreetMap from './OpenStreetMap';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
                <p>Maraton - Ośrodek Aktywnego Wypoczynku - Restauracja-Noclegi - Baza treningowa</p>
                <p>Adres: Lubenia 618, 36-042 Lubenia</p>
                <p>Godziny otwarcia: 8-21</p>
                <Link href="/" >
                    <img src="/LogoCzarne.png" alt="Logo" style={{ width: '250px', height: '250px', borderRadius: '250px' }} />
                </Link>
            </div>
            <OpenStreetMap center={{ lat: 49.9329252, lng: 21.9091142 }} zoom={25} />
            {/* Tutaj dodajemy zoom na mapie oraz wpolrzedne do mapy  */}
        </footer>
    );
};

export default Footer;
