function comprar(producto){
  let mensaje = "Hola JM Import, quiero comprar: " + producto;
  window.open("https://wa.me/18096652971?text=" + encodeURIComponent(mensaje));
}

function filtrar(categoria){
  let cards = document.querySelectorAll('.card');
  cards.forEach(card=>{
    if(categoria === 'todos'){
      card.style.display = 'block';
    }else{
      card.style.display = card.classList.contains(categoria) ? 'block' : 'none';
    }
  });
}
