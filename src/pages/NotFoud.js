import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import icon from '../wait.gif';

function NotFoud() {
   
   useEffect(()=>{
      document.body.classList.add('not-found');
      return function cleanup() {
        document.body.classList.remove('not-found');
      };
   })

  return (
    <div className="container text-center">

         <img src={icon} className="img-fluid mt-3 mb-3" width={280}/>
         <div className="title-h1">
            404
         </div>
         <div className='title-h3'> la page n'existe pas</div>

         <Link to="/">
            <button className="button-primary">
               Retour à l'accueil
            </button>
          
         </Link>

    </div>
  )
}

export default NotFoud