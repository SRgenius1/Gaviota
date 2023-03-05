import { Link } from 'react-router-dom';
import './main.css';

export function BlockView() {
  return (
    <>
      <div className='d-flex justify-content-center w-4'>
      <h1 className='text-princ text-center mt-5 display-1 text-block'>GAVIOTA SOFTWARE</h1>
      <img width='300px' src="https://png.pngtree.com/png-vector/20220701/ourlarge/pngtree-seagull-logo-template-vector-icon-illustration-design-png-image_5454454.png" alt="" />
      </div>
      <div className="d-flex justify-content-center align-items-center owo">
        <form>
          <div className="mb-3">
            <h2 className='block-form-text'>Inicia Sesión</h2>
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
        <button type="submit" className="btn btn-primary mb-3">
          <Link to='/initalView' className='text-light anchor-form'>Submit</Link>
        </button>
            <div id="emailHelp" className="form-text">Forgot your password?</div>
        </form>
      </div>
    </>
  );
}
