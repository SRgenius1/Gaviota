import { useState } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import {NavBar} from '../../Components/Navbar/index';

export function SellRegister() {
    const [showModal, setShowModal] = useState(false);
  return (
    <>
    <NavBar/>
    <div className="owosa">
      <div className='owosa-i'>
          <h1 className='mt-5 mb-5'>INFORMACIÓN DE LA VENTA</h1>
          <div className='d-flex flex-column owosa'>
              <div class="alert alert-warning p-info" role="alert">
              Informacion de contrato
              </div>
              <input type="text" placeholder='     Aquí va el IBS' className='w-50 mb-5 input-sell'/>
              <input type="text" placeholder='     Aquí va el numero del contrato' className='w-50 mb-5 input-sell'/>
              <div class="alert alert-warning p-info" role="alert">
              Informacion personal del cliente
              </div>
              <input type="text" placeholder='     Aquí va el primer nombre' className='w-50 mb-5 input-sell'/>
              <input type="text" placeholder='     Aquí va el segundo nombre' className='w-50 mb-5 input-sell'/>
              <input type="text" placeholder='     Aquí va el la cedula del cliénte ' className='w-50 mb-5 input-sell'/>
              <div class="alert alert-warning p-info" role="alert">
              Seleciona la ciudad y el departamento
              </div>
              <select id="frutas" name="frutas" className='wrld-options mb-5'>
                <option value="manzana">DEPARTAMENTO</option>
                <option value="naranja">Valle del cauca</option>
                <option value="platano">Cauca</option>
                <option value="fresa">Santander</option>
              </select>

              <select id="frutas" name="frutas" className='wrld-options mb-5'>
                <option value="manzana">CIUDAD</option>
                <option value="naranja">CALI</option>
                <option value="platano">POPAYAN</option>
                <option value="fresa">BOGOTÁ</option>
              </select>
              <div class="alert alert-warning p-info" role="alert">
              Forma de pago y cantidad
              </div>
              <select id="frutas" name="frutas" className='wrld-options mb-5'>
                <option value="manzana">FORMA DE PAGO</option>
                <option value="naranja">EFECTIVO</option>
                <option value="platano">TARJETA DE CREDITO</option>
                <option value="fresa">CUENTA DE AHORROS</option>
              </select>
              <input type="text" placeholder='     Aquí va el valor total de la venta ' className='w-50 mb-5 input-sell'/>
              <input type="text" placeholder='     Aquí va el valor del bono si la venta aplica ' className='w-50 mb-5 input-sell'/>
              <div class="alert alert-warning p-info" role="alert">
              Sobre la venta
              </div>
              <select id="frutas" name="frutas" className='wrld-options mb-5'>
                <option value="manzana">TIPO</option>
                <option value="naranja">SOLO NET</option>
                <option value="platano">TV + NET</option>
                <option value="fresa">SOLO TV</option>
              </select>
              <div class="alert alert-warning p-info" role="alert">
              Perimetro y descripción
              </div>
              <select id="frutas" name="frutas" className='wrld-options mb-5'>
                <option value="manzana">PERIMETRO</option>
                <option value="naranja">URBANO</option>
                <option value="platano">RURAL</option>
                <option value="fresa">EXTRA RURAL</option>
              </select>
              <textarea className='w-50 mb-5 input-sell' placeholder='   Aquí va la descripción de la venta'></textarea>
              <div className='buttons-sell-sub mb-5'>
              <button onClick={() => setShowModal(true)} type="button" class="btn btn-outline-primary buttons-sell-sub-1">Listo!</button>
              {showModal && (
                  <div className="modal">
                  <div className="modal-content">
                    <h2>Ingresaste una venta SOLO TV ¿Es correcto?</h2>
                    <p>Da click en listo para continuar</p>
                    <button onClick={() => setShowModal(false)}>
                      <Link to='/resume'>Listo</Link>
                    </button>
                  </div>
                </div>
              )}
              <button type="button" className="btn btn-outline-danger buttons-sell-sub-1">Volver</button>
              </div>
          </div>
      </div>
    </div>
    </>
  );
}
