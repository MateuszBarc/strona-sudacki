import Link from 'next/link';
import styles from './Header.module.css'; // Importujemy style CSS

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img src="/LogoCzarne.png" alt="Logo" style={{ width: '150px', height: '150px', borderRadius: '250px' }} />
                    </Link>
                </div>
                <nav>
                    <ul className={styles['nav-links']}>
                        <li>
                            <Link href="/">
                                Strona Główna
                            </Link>
                        </li>
                        <li>
                            <Link href="/galeria">
                                Galeria
                            </Link>
                        </li>
                        <li>
                            <Link href="/kontakt">
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
