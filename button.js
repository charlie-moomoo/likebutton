window.onload = function (){
  const elements = document.getElementsByClassName('likecoin-button')
for(i=0;i<elements.length;i++){
　elements[i].innerHTML = '<iframe frameborder="0" height="200px" src="https://button.like.co/in/embed/'+elements[i].innerHTML+'/button?referrer='+window.location.href+'&type=omit">';
}
}
