import Header from '../components/Header';
import styles from "../styles/kontakt.module.css"

const Kontakt = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Kontakt</h1>
                <p>Skontaktuj się z nami:</p>
                <ul>
                    <li>Email: kontakt@example.com</li>
                    <li>Telefon: 123-456-789</li>
                    {/* Dodaj więcej informacji kontaktowych */}
                </ul>
            </main>
        </div>
    );
};

export default Kontakt;