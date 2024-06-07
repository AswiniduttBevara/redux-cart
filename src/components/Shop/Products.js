import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DummyItems = [{
  title:'book1',
  price : 10,
  description:'the first book',
  id:'p1'
},
{
  title:'book2',
  price : 20,
  description:'the second book',
  id:'p2'
}];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyItems.map(item => <ProductItem
          key={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          id={item.id}
        />)}
        
      </ul>
    </section>
  );
};

export default Products;
