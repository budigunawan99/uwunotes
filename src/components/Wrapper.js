import React from 'react';
import styled from 'styled-components';

const Wrapper = ({ children }) => {

    const Wrap = styled.div`
        min-height: 100%;
        margin-bottom: -20px;
    `
    return (
        <Wrap>
            {children}
        </Wrap>
    )
}

export default Wrapper;