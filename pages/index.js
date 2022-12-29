import styles from "../styles/Home.module.css"
import Link from "next/link"
import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>NinjaList | Home</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet adipisci sunt deserunt tempora maxime voluptatum vel doloremque. Inventore minus adipisci consectetur facilis quas natus, necessitatibus perspiciatis illum quia excepturi. Id?</p>
      <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi aut ipsum iste culpa voluptatum consectetur nam quam, assumenda enim nulla! Vel accusantium eius corrupti voluptatem sequi quae, hic eos vitae.</p>
      <Link href="/ninjas" className={styles.btn}>
      see Ninja Listing 
      </Link>
    </>
  )
}
