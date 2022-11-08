import React from 'react';
import { useContext } from 'react';
import logo from '../orderLogo.svg';
import { popUpContext } from '../context/popUpContext';

function PopUp() {

   const {accepted, setAccepted} = useContext(popUpContext);

   const handleClose = (e) =>{
      e.preventDefault();
      localStorage.setItem('Order-process-acceptation', 'accepted');
      setAccepted(true);
   }

   console.log(accepted);

  return (
    <div id="pop-up" className='position-fixed pop-mask p-3 p-sm-5'>
      <div className="message-pop-up rounded text-center p-3 p-sm-5  drop-shadow">
         <img src={logo} className="pb-5"/>
         <h1 className='fw-bold text-start'>Bienvenue sur mobile live order</h1>

         <div className='text-start'>
            Pour commander faites votre choix,
            ajoutez au panier et finalisez votre
            commande en renseignant les
            champs requis.
            <br/>
            <strong>
            Un serveur vous apportera votre
               commande à table
            </strong>
         </div>

         <button 
         className='mt-5 btn btn-border'
         onClick={(e)=> handleClose(e)}>
         Fermer
         </button>



      </div>
      

    </div>
  )
}

export default PopUp