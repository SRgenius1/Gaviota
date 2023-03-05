import {Link} from 'react-router-dom';
import { NavBar } from '../../Components/Navbar';
import './main.css';

export function InitalView() {
  return (
    <>
      <NavBar/>
    <>
      <div className='initialView-container d-flex'>
        <section className='container-nav w-25 vh-100 options-form'>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              VENTAS
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body d-flex flex-column dow-options">
                <button type="button" className="btn btn-outline-secondary mb-4">
                  <Link to='/sell' className='w-auto sell-link'>
                    Ventas
                  </Link>
                </button>
            <button type="button" className="btn btn-outline-secondary mb-4">Call-center</button>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              TERCEROS
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body dow-options">
            <button type="button" className="btn btn-outline-secondary mb-4 w-100">Terceros</button>
            <button type="button" className="btn btn-outline-secondary mb-4 w-100">Vendedores</button>
            <button type="button" className="btn btn-outline-secondary mb-4 w-100">Formatos/documentos</button>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              INSTALACIONES
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body dow-options">
            <button type="button" className="btn btn-outline-dark mb-4 w-100">Kit prepago</button>
            <button type="button" className="btn btn-outline-dark mb-4 w-100">Instalaciones</button>
            </div>
          </div>
        </div>
      </div>
        </section>
        <section className='container-info w-75 vh-100 gavi-container'>
          <img className='gavi-img' src="https://gaviota.comunicate.com.co/administracion/imagenes/inicio.png" alt="" />
        </section>
      </div>
    </>
    </>
  )
}
