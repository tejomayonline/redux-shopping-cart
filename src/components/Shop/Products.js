import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem id="p1" title="Fruit 1" price={6} description="Mango" />
        <ProductItem id="p2" title="Fruit 2" price={4} description="Litchis" />
      </ul>
    </section>
  );
};

export default Products;
