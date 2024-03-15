import Link from "next/link";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h2>
                    🔥Chcesz nauczyć się bokserskiego rzemiosła i wiedzieć jak go wykorzystywać?<br />
                    💪Chcesz nauczyć się wyprowadzać piekielnie silne bokserskie ciosy ?<br />
                    🥊Chcesz poznać mechanizmy jakimi posługują się pięściarze w ringu?<br />
                    🤝Nie mogłeś lepiej trafić! Z ogromną chęcią przeprowadzę cię przez zawiły świat boksu w prostej do przyswojenia formie.
                </h2>
                <h4>
                    Skontaktuj się ze mną już dziś!<br />
                    📞 Dzwoń: 721 414 195 lub 📨 Wypełnij formularz zgłoszeniowy!
                </h4>
            </div>
            <div className={styles.content}>
                <div className={styles.tekst}>
                    <h2>Wypełnij formularz a ja skontaktuje się z Tobą!</h2>
                </div>
                <div>
                    <label className={styles.label}>
                        Imię:
                        <input type="text" name="firstName" className={styles.input} />
                    </label>
                </div>
                <div>
                    <label className={styles.label}>
                        Nazwisko:
                        <input type="text" name="lastName" className={styles.input} />
                    </label>
                </div>

                <div>
                    <label className={styles.label}>
                        Numer telefonu:
                        <input type="tel" name="phoneNumber" className={styles.input} />
                    </label>
                </div>
                <div>
                    <label className={styles.label}>
                        E-mail:
                        <input type="email" name="email" className={styles.input} />
                    </label>
                </div>
                <div className={styles.checkboxLabel}>
                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" name="agreement" />
                        Akceptuję warunki i regulamin
                    </label>
                </div>
                <div className={styles.submitButtonContainer}>
                    <button type="submit" className={styles.submitButton}>
                        Wyślij
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;