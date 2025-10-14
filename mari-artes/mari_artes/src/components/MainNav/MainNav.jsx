// REACT
import { Link } from "react-router-dom"
//CSS
import "./MainNav.css"

const MainNav = () => {

  return (

      <div>
        <hr/>
          <div className="container-main-nav">
                <div className="nav">
                    <Link to="/bags">Bolsas</Link>
                    <Link to="/necklaces">Colares</Link>
                    <Link to="/bracelets">Pulseiras</Link>
                    <Link to="keychains">Chaveiros</Link>
                    <Link to="/photoframe">Porta-Retratos</Link>
                </div>
            
              </div>
      </div>

  )
}

export default MainNav