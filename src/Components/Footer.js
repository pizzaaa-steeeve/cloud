import React from 'react';
import 'react-bootstrap';

function MyFooter(){
    return(
        <div>
          <footer className="p-5 bg-secondary text-white text-center position-relative">
        <div >
            <p className="lead">Copyright &copy; Go My Code </p>
            <a href="#" className="position-absolute bottom-0 end-0 p-5">
                <i className="bi bi-arrow-circle h1 text-white "></i>
            </a>
        </div>
    </footer>
        </div>
    )
}



export default MyFooter;