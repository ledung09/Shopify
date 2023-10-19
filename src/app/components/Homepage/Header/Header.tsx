"use client"

import Link from "next/link"
import styles from "../Header/header.module.css"
import { useSelectedLayoutSegment } from "next/navigation"

export default function Header() {
  const segment = useSelectedLayoutSegment();
  console.log(segment)
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>Shopify</Link>
      <Link style={{ borderBottom: segment === "electronics" ? "2px solid black":""}} href="/electronics" className={styles.navitem}>Electronics</Link>
      <Link style={{ borderBottom: segment === "jewelery" ? "2px solid black":""}} href="/jewelery" className={styles.navitem}>Jewelery</Link>
      <Link style={{ borderBottom: segment === "men's%20clothing" ? "2px solid black":""}} href="/men's%20clothing" className={styles.navitem}>Men's clothing</Link>
      <Link style={{ borderBottom: segment === "women's%20clothing" ? "2px solid black":""}} href="/women's%20clothing" className={styles.navitem}>Women's clothing</Link>
      <Link style={{ borderBottom: segment === "cart" ? "2px solid black":""}} href="/cart" className={styles.navitem}>Cart</Link>          
    </header>
  )
}
