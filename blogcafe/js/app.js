function myFunction() {
     let x = document.getElementById("navegacion");
     if (x.className === "navegacion") {
       x.className += " responsive";

     } else {
       x.className = "navegacion";
     }
   }