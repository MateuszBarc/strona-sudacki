import Header from '../components/Header';
import styles from "../styles/galeria.module.css";


const Galeria = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Galeria</h1>
                <div className="gallery">
                    <img src="/galeria1.jpeg" alt="Obraz 1" style={{ width: '250px', height: '250px', objectFit: 'cover', margin: '10px' }} />
                    <img src="/galeria2.jpeg" alt="Obraz 2" style={{ width: '250px', height: '250px', objectFit: 'cover', margin: '10px' }} />
                    <img src="/galeria3.JPG" alt="Obraz 3" style={{ width: '250px', height: '250px', objectFit: 'cover', margin: '10px' }} />
                    <img src="/galeria4.JPG" alt="Obraz 4" style={{ width: '250px', height: '250px', objectFit: 'cover', margin: '10px' }} />
                    <img src="/galeria5.JPG" alt="Obraz 5" style={{ width: '250px', height: '250px', objectFit: 'cover', margin: '10px' }} />
                    <img src="/galeria6.JPG" alt="Obraz 6" style={{ width: '250px', height: '250px', objectFit: 'cover', margin: '10px' }} />
                    {/* Dodaj więcej zdjęć galerii */}
                </div>
            </main>
        </div>
    );
};

export default Galeria;