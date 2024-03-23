import Image from "next/image";
import styles from "../styles/banner.module.css";

const Banner = () => {
    return (

        <div className={styles.right}>
            <Image src="/banerglowny.png" alt="Banner główny" layout="responsive" width={2120} height={400} />
        </div>


    );
};

export default Banner;
