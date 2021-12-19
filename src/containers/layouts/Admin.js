import Header from "../../components/common/Admin/Header";
import Footer from "../../components/common/Admin/Footer";
export default function Admin({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
