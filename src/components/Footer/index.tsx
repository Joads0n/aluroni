import footerStyle from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
export default function Footer(){
  return (
    <footer className={footerStyle.footer}>
      <Logo />
    </footer>
  );
}