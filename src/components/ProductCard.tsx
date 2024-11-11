import styled from 'styled-components';

const ProductCard = ({ product }) => (
  <Card>
    <Image src={product.image} alt={product.title} />
    <Title>{product.title}</Title>
    <Price>{product.price}</Price>
  </Card>
);

export default ProductCard;

const Card = styled.div`
  /* Card styles */
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h2`
  /* Title styling */
`;

const Price = styled.p`
  /* Price styling */
`;
