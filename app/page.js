import Image from "next/image";
import styles from "./page.module.css";
import Header from '../components/Header';
import Banner from "@/components/Banner";


export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <main className={styles.main}>
        <div className={styles.trainerSection}>
          <div className={styles.trainerImage}>
            <Image src="/trener.jpg" alt="Zdjęcie trenera" width={1000} height={1000} className={styles.roundedImage} />
          </div>
          <div className={styles.trainerDescription}>
            <div className={styles.trainerDescription}>
              <h1>👊Siema, nazywam się Michał Sudacki</h1>
              <h2>🥊Prowadzę treningi z zakresu boksu i kickboxingu.</h2>
              <p>🧠Jeżeli chcecie zacząć swoją przygodę z uderzanymi sportami walki lub juz trenujecie
                ale chcielibyście poprawić swoje umiejętności stójkowe lub już trenujecie ale chcielibyście poprawić swoje umiejętności stójkowe
                to zapraszam was do mnie na treningi. <br />
                📩Napisz do mnie wiadomość przez formularz zgłoszeniowy na stronie kontaktu albo na messengerze jeżeli masz jakieś pytania
                lub chcesz umówić się na trening i widzmy sie na macie.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
