import styled from 'styled-components';
import Link from 'next/link';
import { FaRegHeart, FaRegUser, FaShoppingCart } from 'react-icons/fa';

const StyledLink = styled(Link)`
    padding: 5px;
    margin-right: 5px;
    text-decoration: none;
    color: #000;
    transition: all 0.2s ease;

    &:hover {
        cursor: pointer;
        color: rgba(0, 0, 0, 0.65);
    }

    &:first-of-type {
        margin-left: 10px;
    }
`;

const StyledNav = styled.nav`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between; /* Spread links and icons */
    width: 100%;
    padding: 0 20px; /* Add padding to align content nicely */
`;

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    svg {
        cursor: pointer;
        font-size: 1.5rem;
        color: #000;
        transition: color 0.2s ease;

        &:hover {
            color: rgba(0, 0, 0, 0.65);
        }
    }
`;

const Header: React.FC = () => (
    <header>
        <StyledNav>
            <LinkContainer>
                <StyledLink href={`/products`}>Justfab</StyledLink>
                <StyledLink href={`/products`}>FabKids</StyledLink>
                <StyledLink href={`/products`}>Shoedazzle</StyledLink>
                <StyledLink href={`/products`}>Apparel</StyledLink>
                <StyledLink href={`/products`}>Outdoors</StyledLink>
                <StyledLink href={`/products`}>Jewelry</StyledLink>
            </LinkContainer>
            <IconContainer>
                <FaRegHeart title="Wishlist" />
                <FaRegUser title="Account" />
                <FaShoppingCart title="Cart" />
            </IconContainer>
        </StyledNav>
    </header>
);

export default Header;
