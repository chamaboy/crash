import "../styles/globals.css";

import type { AppProps } from "next/dist/next-server/lib/router/router";

import { Layout } from "../components/Layout";

const App = (props: AppProps) => {
  return (
    <Layout>
      <props.Component {...props.pageProps} />
    </Layout>
  );
};

export default App;
