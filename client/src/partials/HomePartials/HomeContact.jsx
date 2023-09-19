import { Link } from "react-router-dom";

function HomeContact() {
  return (
    <div className="home_contact">
      <div className="home_contact_inner">
        <div className="home_contact_inner_row1">
          <h2>Bize Ulaşın</h2>
          <p>
            Daha fazla bilgi edinmek veya ücretsiz danışmanlığınızı planlamak
            için bizi span 0358 212 4763 numaralı telefondan arayın.
          </p>
          <button className="home_contact_button">
            <Link to="/contact" className="home_contact_button_navlink">
              İletişim
            </Link>
          </button>
        </div>

        <div className="home_contact_inner_row2">
          <div className="home_contact_kutu1"></div>
          <div className="home_contact_kutu2"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeContact;
