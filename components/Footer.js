import OpenStreetMap from './OpenStreetMap';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
                <p>Maraton - Ośrodek Aktywnego Wypoczynku - Restauracja-Noclegi - Baza treningowa</p>
                <p>Adres: Lubenia 618, 36-042 Lubenia</p>
                <p>Godziny otwarcia: 8-21</p>
                <Link href="/" >
                    <Image src="/LogoCzarne.png" alt="Logo" width={250} height={250} style={{ borderRadius: '250px' }} />
                </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '10px' }}>
                    <Link href="https://www.facebook.com/profile.php?id=61554392384818">
                        <Image src="/facebook-logo.png" alt="Facebook" width={40} height={40} style={{ marginRight: '10px' }} />
                    </Link>
                </div>
                <div style={{ marginTop: '10px' }}>
                    <Link href="https://www.instagram.com/michal.sudacki/">
                        <Image src="/instagram-logo.png" alt="Instagram" width={40} height={40} style={{ marginRight: '10px' }} />
                    </Link>
                </div>
                <OpenStreetMap center={{ lat: 49.9329252, lng: 21.9091142 }} zoom={25} />
            </div>

        </footer>
    );
};

export default Footer;
