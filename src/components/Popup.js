import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// localhost: 3000/popup
function Popup() {
    return (
        <Wrapper>
            <section>
                <Link to="/">
                    <div className="front"></div>
                </Link>
                    <div className="bottom"></div>
            </section>
        </Wrapper>
    );
}

// auto adjust
const Wrapper = styled.div`
    section {
        background-color: #262323;
        height: 100%;
        width: 100%;
        position: fixed;
    }
    
    div.front {
        background-color: #262323;
        height: 100px;
        width: 100%;
    }
    
    div.bottom {
        background-color: #FFFFFF;
        left: 0px;
        bottom: 0px;
        width: 100%;
        position:absolute;
        top:100px;
        border-radius: 12px 12px 0px 0px;
    }
    
`;

export default Popup;
