export const apiUrl = process.env.REACT_APP_API_URL;


//Getting all users
export const getCategory = async () =>{
   const response = await fetch(`${apiUrl}/categories`,{ credentials: "include" });
   if(response.ok){
      const categories = await response.json();
      return categories;
   }
   else if(response.ok === false){
         return response
   }
}

//Getting all users
export const getData = async () =>{
   const response = await fetch(`${apiUrl}/items`,{ credentials: "include" });
   if(response.ok){
      const food = await response.json();
      return food;
   }
   else if(response.ok === false){
         return response
   }
}