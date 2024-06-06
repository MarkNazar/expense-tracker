import styled from "styled-components";

const StyledFooter = styled.footer`
  font-size: 1rem;
  color: var(--color-blue-dark);
  text-align: center;
  margin-top: 50px;
`;

const Footer = () => {
  return <StyledFooter>Developed by Ian Nazar</StyledFooter>;
};

export default Footer;
