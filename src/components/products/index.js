import styled from "styled-components";
import { Product } from "../product";

const Products = ({ products }) => {
  return (
    <>
      <UlProduct>
        {products.length > 0 ? (
          products.map((product, index) => (
            <Product 
                key={index} 
                name={product.name} 
                price={product.price} 
                image={product.image} />
          ))
        ) : (
          <li>Nenhum produto encontrado</li>
        )}
      </UlProduct>
    </>
  );
};


const UlProduct = styled.ul`
  display:flex;
  gap:20px;
  justify-content:center;
  flex-wrap:wrap;
`
export { Products };
