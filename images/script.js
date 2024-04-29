

$(document).ready(function(){
  $('.carousel').carousel();
});
$(function () {
  $('#vidBox').VideoPopUp({ 
   	backgroundColor: "#17212a",
   	opener: "video1",
    maxweight: "640",
    idvideo: "v1"
  });
 });

 function changeBackground(bg,title){
  const banner = document.querySelector('.banner');
  const contents = document.querySelectorAll('.content');

  banner.style.background= `url("./images/${bg}")`;
  banner.style.backgroundSize = 'cover';
  banner.style.backgroundPosition = 'center';

  Object.keys(contents).forEach((key)=> {
     key.classList.remove('active');
     if(key.classList.contains(title)){
      key.classList.add('active');
     }
    console.log(key, contents[key]);
  
  });
 }