import Link from "next/link";
import styles from "./StartHere.module.css";

export default function StartHere() {
  return (
    <section className={styles.startHere} aria-labelledby="start-here-heading">
      <div className={styles.startHereInner}>
        <header className={styles.startHereHeader}>
          <span className={styles.eyebrow}>START HERE</span>
          <h2 id="start-here-heading">Who are you here for?</h2>
          <p>
            Choose the path that best describes you so we can guide you to the
            most relevant services.
          </p>
        </header>

        <div className={styles.startHereOptions}>
          <Link href="/consulting" className={styles.startCard}>
            <h3>I&apos;m a Company</h3>
            <p>
              Explore AI governance and privacy consulting services designed for
              organizations that need strategic, practical guidance.
            </p>
            <span className={styles.cardCta}>Go to Company Services →</span>
          </Link>

          <Link href="/legal" className={styles.startCard}>
            <h3>I&apos;m an Individual</h3>
            <p>
              Access legal services for immigration, real estate, and other key
              matters where having the right advocate matters most.
            </p>
            <span className={styles.cardCta}>Go to Individual Services →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

