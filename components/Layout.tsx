import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";
import GoogleAnalytics from "./GoogleAnalytics";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <GoogleAnalytics />
      <Header />
      <div className="min-h-screen m-auto min-w-[300px] max-w-7xl">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
