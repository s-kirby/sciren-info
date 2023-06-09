import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Team() {
  return (
    <>
      <Head>
        <title>SciREN: Techincal Details</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>SciREN-Net: The Team</h1>
        <div className={styles.miniNav}>
          <Link href="/" className={styles.miniLink}>
            Home
          </Link>
          <Link href="/sprint1" className={styles.miniLink}>
            Sprints
          </Link>
          <Link href="/tech" className={styles.miniLink}>
            Technical Details
          </Link>
          <Link
            href="/team"
            className={styles.miniLink + " " + styles.sunderline}
          >
            The Team
          </Link>
          <Link
            href="https://github.com/pdthompson5/SciREN-Net"
            className={styles.miniLink}
          >
            Github Repo
          </Link>
        </div>

        <hr></hr>
        <h2 className={styles.sheader}>Foreward</h2>

        <h3 className={styles.sheader1}>Stephen Kirby</h3>
        <ul>
          <li className={styles.sli}>Roles: Database Manager</li>
          <li className={styles.sli}>
            Github:{" "}
            <a href="https://github.com/s-kirby" className={styles.inlineLink}>
              s-kirby
            </a>
          </li>
        </ul>
        <h3 className={styles.sheader1}>Phil Thompson</h3>
        <ul>
          <li className={styles.sli}>Roles: Organizer, Frontend Dev </li>
          <li className={styles.sli}>
            Github:{" "}
            <a
              href="https://github.com/pdthompson5"
              className={styles.inlineLink}
            >
              pdthompson5
            </a>
          </li>
        </ul>
        <h3 className={styles.sheader1}>Jake Stensrud</h3>
        <ul>
          <li className={styles.sli}>Roles: Frontend Dev, UX</li>
          <li className={styles.sli}>
            Github:{" "}
            <a
              href="https://github.com/JakeStensrud"
              className={styles.inlineLink}
            >
              JakeStensrud
            </a>
          </li>
        </ul>
        <br></br>
        <p>
          {" "}
          We have no project lead, and have found that complete democracy suits
          us.{" "}
        </p>
      </main>
    </>
  );
}
