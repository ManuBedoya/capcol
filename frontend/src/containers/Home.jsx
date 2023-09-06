import Layout from "../hocs/Layout";
import ProductsHome from "../components/general/ProductsHome";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.main
      className="main__container"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Layout>
        <ProductsHome />
      </Layout>
    </motion.main>
  );
};

export default Home;
