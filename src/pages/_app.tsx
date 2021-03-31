import "../styles/globals.css";

import type { AppProps } from "next/dist/next-server/lib/router/router";

import { Layout } from "../components/Layout";
import { AuthProvider } from "../lib/auth";

const App = (props: AppProps) => {
  return (
    <AuthProvider>
      <Layout>
        <props.Component {...props.pageProps} />
      </Layout>
    </AuthProvider>
  );
};

export default App;
