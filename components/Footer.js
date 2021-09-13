import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; DJ events 2021</p>

      {router.pathname !== "/about" && (
        <p>
          <Link href="/about">About this project</Link>
        </p>
      )}
    </footer>
  );
}
