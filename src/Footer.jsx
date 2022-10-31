import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  bottom: 1em;
  right: 1em;
`;

const Signature = styled.div`
  color: var(--main-color);
  font-family: "Poppins";
`;

const Footer = () => {
  return (
    <Wrapper>
      <Signature>Léo Stephan</Signature>
    </Wrapper>
  );
};

export default Footer;
