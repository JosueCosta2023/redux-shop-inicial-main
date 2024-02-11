import styled from "styled-components";

const Product = ({ name, price, image }) => {

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
      <button>
        Adicionar ao carrinho
      </button>
    </ListItem>
  );
};

const ListItem = styled.li`
  width:200px;
  height:200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align:center;
  margin: 10px 0;
  padding: 10px;
  background-color: #2f3042;

  h3 {
      margin-bottom: 10px;
  }

  button {
      align-self: center;
      padding: 10px;
      border-radius: 5px;
      border: none;
      background-color: #ff7272;
      color: #ffffff;
      cursor: pointer;
  }
`;


export { Product };
