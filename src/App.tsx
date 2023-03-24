import { useRef, useEffect } from 'react';
import './App.css';

function App() {
  const menuBtnRef = useRef<HTMLImageElement>(null);
  const closeMenuBtnRef = useRef<HTMLImageElement>(null);
  const menuListRef = useRef<HTMLUListElement>(null);

  function openMenu() {
    if (menuListRef.current && menuBtnRef.current && closeMenuBtnRef.current) {
      menuListRef.current.style.display = 'flex';
      menuBtnRef.current.style.display = 'none';
      closeMenuBtnRef.current.style.display = 'flex';
    }
  }
  
  function closeMenu() {
    if (menuListRef.current && menuBtnRef.current && closeMenuBtnRef.current) {
      menuListRef.current.style.display = 'none';
      closeMenuBtnRef.current.style.display = 'none';
      menuBtnRef.current.style.display = 'flex';
    }
  }

  useEffect(() => {
    if (menuBtnRef.current) {
      menuBtnRef.current.addEventListener('click', openMenu);
    
      return () => {
        menuBtnRef.current!.removeEventListener('click', openMenu);
      };
    }    
  }, []);
  
  useEffect(() => {
    if (closeMenuBtnRef.current) {
      closeMenuBtnRef.current.addEventListener('click', closeMenu);
    
      return () => {
        closeMenuBtnRef.current!.removeEventListener('click', closeMenu);
      };
    }    
  }, []);

  return (
    <div className="App">
      <div className="header">
        <img id='logo-img' src="./images/logo.png" alt="logo da loja de roupas" />
        <div className="header-icons">
          <a className="register-btn-style" href="">
            Login
          </a>
          <a className="register-btn-style" href="">
            Cadastre-se
          </a>
          <a href="">
            <img className="icon" src="./images/shopping-cart-icon.png" alt="icone carrinho" />
          </a>
          <div className="products-bar">
            <img className="icon" id='close-menu-btn' ref={closeMenuBtnRef} src="./images/close-menu-icon.png" alt="Icone para fechar menu vertical" />
            <img className="icon" ref={menuBtnRef} src="./images/menu-icon.png" alt="Icone do menu vertical" />
            <ul className="products-list" ref={menuListRef}>
              <li>Camisetas</li>
              <li>Calças</li>
              <li>Calçados</li>
              <li>Acessórios</li>
            </ul>
          </div>
        </div>
      </div>   
      <div className='banner-alignment'>
        <img src="./images/background.gif" alt="" />
      </div>        
    </div>
    
  );
}

export default App;
