import { GetStaticProps } from 'next';
import { fetchProducts } from '../../lib/shopify';
import styled from 'styled-components';

import Sidebar from '../../components/Sidebar';

const ProductPageContainer = styled.div``;
const HeaderImage = styled.img`
  width: 100%;
  height: auto;
`;
const ContentContainer = styled.div`
  display: flex;
`;
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  width: 80%;
`;
const ProductCard = styled.div`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
`;
const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;
const ProductTitle = styled.h2`
  font-size: 1.2rem;
`;
const ProductPrice = styled.p`
  color: #555;
`;

interface Product {
  id: string;
  title: string;
  description: string;
  images: { edges: { node: { url: string } }[] };
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
}

interface ProductPageProps {
  products: Product[];
}

const ProductPage: React.FC<ProductPageProps> = ({ products }) => {
  return (
    <ProductPageContainer>
      <HeaderImage src="/images/justfab-banner.webp" alt="Products" />
      <ContentContainer>
        <Sidebar />
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage
                src={product?.images?.edges?.[0]?.node?.url}
                alt={product.title}
              />
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>
                {product.priceRange.minVariantPrice.amount} {product.priceRange.minVariantPrice.currencyCode}
              </ProductPrice>
            </ProductCard>
          ))}
        </ProductGrid>
      </ContentContainer>
    </ProductPageContainer>
  );
};

export default ProductPage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const products = await fetchProducts();
    return {
      props: {
        products,
      },
      revalidate: 60, // Revalidate the page every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      notFound: true, // Show a 404 page if there's an error
    };
  }
};
