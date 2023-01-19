import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import first from "../images/first.jpg"

const Product = () => {
  return (
    <>
      <Helmet>
        <title>product Page</title>
        <meta name="description" content="product" />
      </Helmet>
      <Header />
      <img src={first} alt=""/>

      <Footer />
    </>
  );
};

export default Product;
