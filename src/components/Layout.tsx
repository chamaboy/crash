import type { ReactNode } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = (props: { children: ReactNode }): JSX.Element => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6">{props.children}</main>
      <Footer />
    </>
  );
};
