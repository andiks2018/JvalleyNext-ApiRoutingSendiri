import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next js Api route</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {data.map((e)=>(
          <div key={e.id}>
            <h3>{e.title}</h3>
            <p>{e.body}</p>
          </div>
        ))}
      </main>
    </div>
  )
}

export async function getServerSideProps(){
  const result = await fetch("http://localhost:3000/api/blogs/read")
  const { data } = await result.json()
  return {
    props : {
      data : data //steleh membuat data kita masukkan ke Home()
    }
  }
}