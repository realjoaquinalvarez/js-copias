
let stars = document.querySelectorAll('.star');

let starCounter = 0;
let starStorage = 0;

stars.forEach(star => {
   starCounter++;
   let starNumber = starCounter;

   star.addEventListener("mouseover", () => {
      marcarEstrella( starNumber );
   });

   star.addEventListener('click', () => {
      starStorage = starNumber;
   });
   
   star.addEventListener("mouseout", () => {
      marcarEstrella( starStorage );
   });

});
        
const marcarEstrella = ( calificacion = 0 ) => {

   stars.forEach((star, starPosition) => {

      if( starPosition < calificacion){
         star.classList.add('active');
      }else{
         star.classList.remove('active');
      }
      
   });
   
};
        
const desmarcarEstrella = () => {

   stars.forEach((star) => {

      star.classList.remove('active');
      
   });
   
};
        
