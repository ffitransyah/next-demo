import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <h1>About Me</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </Layout>
  )
}