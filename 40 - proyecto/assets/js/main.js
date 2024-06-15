
let stars = document.querySelectorAll('.star');

let starStorage = 0;

stars.forEach((star, position) => {
   let starNumber = position + 1;

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

