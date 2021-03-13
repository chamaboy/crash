import Head from "next/head";
import type { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>トップページ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>トップページです</h1>
    </>
  );
};

export default Home;
