import styled from 'styled-components';

export const SharedSection = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &#home{
        background: #999;
    }
    &#about{
        background: #888;
    }
    &#work{
        background: #777;
    }
    &#contact{
        background: #666;
    }
`;

export const HeaderH1 = styled.h1`
    color: #fff;
    font-size: clamp(3rem, 10vw, 5rem);
    letter-spacing: .3rem;
    text-transform: uppercase;
`;