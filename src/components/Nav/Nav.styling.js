import styled from 'styled-components';

export const NavWrapper = styled.nav`
    position: fixed;
    height: 6rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #333;
`;

export const NavUL = styled.ul`
    height: 100%;
    width: 80%;
    max-width: 90rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const NavLI = styled.li`
    color: #f1f1f1;
    font-size: 1.4rem;
    letter-spacing: .3rem;
    cursor: pointer;
    &:hover {
        color: #f00;
    }
    &.active {
        color: red;
    }
`;

