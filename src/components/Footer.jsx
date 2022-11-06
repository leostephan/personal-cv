import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  bottom: 1em;
  right: 1em;
`;

const Signature = styled.div`
  color: var(--main-color);
  font-family: "Poppins";
  font-weight: 100;
  font-size: 0.8em;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Signature>Léo Stephan | 2022</Signature>
    </Wrapper>
  );
};

export default Footer;
