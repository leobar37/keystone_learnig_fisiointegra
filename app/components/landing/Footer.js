const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div className>
          <h2 className="logo">FISIOINTEGRA</h2>
        </div>
        <div className="footer_social">
          <h3 className="title">siguenos:</h3>
          <ul className="social">
            <a href>
              <i className="fab fa-facebook-f" />
            </a>
            <a href>
              <i className="fab fa-instagram" />
            </a>
            <a href>
              <i className="fab fa-whatsapp" />
            </a>
          </ul>
        </div>
        <div className="menu">
          <h3>Menú</h3>
          <ul>
            <li>
              <a href>Inicio</a>
            </li>
            <li>
              <a href>servicios</a>
            </li>
            <li>
              <a href>encuentranos</a>
            </li>
            <li>
              <a href>contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
