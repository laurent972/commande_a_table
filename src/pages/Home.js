import React,{ useState } from 'react';
import Card from '../components/Card';
import { useEffect } from 'react';
import {getCategory,getData } from '../api/services';
import PopUp from '../components/PopUp';
import { useContext } from 'react';
import { popUpContext } from '../context/popUpContext';
import { useSelector } from 'react-redux';


export default function Home() {

   const [categories,setCategories] = useState([]);
   let [items,setItems] = useState([]);
   const [selectCategory, setSelectCategory]= useState('');
   const {accepted, setAccepted} = useContext(popUpContext);
  

   console.log(accepted);

   useEffect(()=>{
      getCategory().then(response => setCategories(response))
   },[]);

   useEffect(()=>{
      getData().then(response => setItems(response));
   },[])

   //function active filter button
   const filterTerm = (e,id)=>{
         const button = document.querySelectorAll('button');
         e.preventDefault();
         button.forEach(element => {
             if(element.id == id){
               element.classList.add("active-button")
             }else{
               element.classList.remove("active-button")
             }
         });  
   }

   if(selectCategory.length !== 0 ){
       items = items.filter(item=>item.categorie.includes(selectCategory))
   }
    
  return (
   <>
      <div className='filter-app'>
         <div className="container">
            <div className='title-h2 font-body'>
               Catégories
            </div>
            <div className='d-flex flex-wrap pt-2 pb-2'>
               <button
                  onClick={(e)=> setSelectCategory('') + filterTerm(e,'')}
                  className="button-filter box-rounded  p-1 ps-2 pe-2 me-1 mb-2">
                  Tout
               </button>
               {categories.map(category =>(
                  <button 
                     id={category?.id}
                     key={category?.id} 
                     onClick={(e)=> setSelectCategory(category?.id) + filterTerm(e,category?.id)}
                     className="button-filter box-rounded  p-1 ps-2 pe-2 me-1 mb-2 text-capitalize">
                     {category?.name}
                  </button>
               ))}
            </div>  
         </div>
      </div>
      <section className="container p-5">
         {items.map(item =>(
            <Card key={item.id} food={item} />
         ))}
      </section>
      
      {accepted ? null : <PopUp />}      
      

   </>

  
  )
}
