const ProductList = (props) => {
  return (
    <section className="product-list">
      <h2>محصولات</h2>
      <ul>
        {props.products.map((item) => {
         return <li key={item.id} onClick={() => props.onRemoveItem(item.id)}>
            <span>{item.title}</span>
            <span>{item.amount}</span>
          </li>;
        })}
      </ul>
    </section>
  );
};

export default ProductList;
