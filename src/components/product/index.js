import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addProductsToCart } from "../../store/actions/cart";

const Product = ({ name, price, image }) => {

  const dispatch = useDispatch()

  return (
    <ListItem>
      <div>
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <p>
          {price.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <button onClick={() => dispatch(addProductsToCart({ name, price, image }))}>
        Adicionar ao carrinho
      </button>
    </ListItem>
  );
};

const ListItem = styled.li`
  width:200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align:center;
  margin: 10px 0;
  padding: 30px;
  background-color: #2f3042;
  border-radius:10px;
  border:3px solid #fff9;
  h3 {
      margin-bottom: 10px;
  }
  &:hover{
    background: rgba(185, 185, 199, 0.99);
    color:#2f3042;
    cursor:pointer;
    border:3px solid #fff;
  }


  button {
      align-self: center;
      padding: 10px;
      border-radius: 5px;
      border: none;
      background-color: #ff7272;
      color: #ffffff;
      cursor: pointer;
      margin-top:10px;
  }

  img{
    width:80%;
    height:250px;
    object-fit:cover;
    margin-top:10px;
    margin-bottom:10px;
  }

`;


export { Product };
