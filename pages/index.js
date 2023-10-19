import Head from 'next/head'


export default function Home() {
  return (
    <div className="bg-slate-900">
      <Head>
        <title>Flux Frame</title>
        <meta name="description" content="AI web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-xl font-medium p-10 text-white">
        Flux Frame
            </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/anshuman-8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
           Anshuman
          </span>
        </a>
      </footer>
    </div>
  )
}
