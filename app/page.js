import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Preview from "./components/Preview/Preview";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <Preview/>
    </div>
  );
}
