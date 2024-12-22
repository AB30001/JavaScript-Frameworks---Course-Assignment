import Toggle from "./Toggle";
import { FooterContainer, Copyright, ThemeControls } from "./styled";

// Component designed to render the footer section
const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>
        <span>tigershop</span>
        &copy;
        {new Date().getFullYear()}
      </Copyright>
      <ThemeControls>
        <Toggle />
      </ThemeControls>
    </FooterContainer>
  );
};

export default Footer;
