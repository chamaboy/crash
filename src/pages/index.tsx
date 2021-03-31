import Head from "next/head";

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>トップページ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-10">
        <h1>トップページです</h1>
      </div>
    </>
  );
};

export default Home;
