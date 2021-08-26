import Head from 'next/head';
import Layout from 'components/Common/Layout';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Donghoon Kang's Portfolio</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.css"
        />
      </Head>
      <Layout />
    </>
  );
}
