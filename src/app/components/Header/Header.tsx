import Link from "next/link"
import styles from "../Header/header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>Shopify</Link>
      <Link href="/electronics" className={styles.navitem}>Electronics</Link>
      <Link href="/jewelery" className={styles.navitem}>Jewelery</Link>
      <Link href="/men's%20clothing" className={styles.navitem}>Men's clothing</Link>
      <Link href="/women's%20clothing" className={styles.navitem}>Women's clothing</Link>
      <Link href="/cart" className={styles.navitem}>Cart</Link>          
    </header>
  )
}
