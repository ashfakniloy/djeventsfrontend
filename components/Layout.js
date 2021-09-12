import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";
import Showcase from "./Showcase";
import styles from "@/styles/Layout.module.css";

export default function Layout({ title, description, keywords, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />

      {router.pathname === "/" && <Showcase />}

      <div className={styles.container}>{children}</div>

      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Welcome to DJ events",
  description: "Hottest dj events in town",
  keywords: "music, dj, events",
};
