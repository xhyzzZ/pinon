import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// localhost: 3000
function Home() {
    return (
        <Wrapper>
            <Link to="/popup">
                <button >Show popup</button>
            </Link>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    button {
        font-weight: bold
    }
`;

export default Home;
