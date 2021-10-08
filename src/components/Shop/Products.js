import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "p1", title: "Fruit 1", price: 6, description: "Mango is sweeter!!" },
  { id: "p2", title: "Fruit 2", price: 4, description: "Litchis itches!!" },
];

const Products = (props) => {
  const getProducts = (products) => {
    return products.map((product) => (
      <ProductItem
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
      />
    ));
  };
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{getProducts(DUMMY_PRODUCTS)}</ul>
    </section>
  );
};

export default Products;
