import React from "react";
import styled from "styled-components";

const Fallback = ({ message }) => {
  return (
    <>
      <Container>
        <figure>
          <Image src="/img/nodata.png" alt="Empty Note" />
          <figcaption>
            <SourceLink
              href="https://storyset.com/data"
              aria-label="image attribution link"
              tabIndex="0"
            >
              Illustration by Freepik Storyset
            </SourceLink>
          </figcaption>
        </figure>
        <Message tabIndex="0">{message}</Message>
      </Container>
    </>
  );
};

const Container = styled.div`
  text-align: center;
`;

const SourceLink = styled.a`
  font-size: 12px;
`;

const Image = styled.img`
  width: 50%;
`;

const Message = styled.h3`
  font-style: italic;
`;

export default Fallback;
