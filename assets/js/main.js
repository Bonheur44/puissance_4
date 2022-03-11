(function(){const select=(el,all=false)=>{el=el.trim()
  if(all){return[...document.querySelectorAll(el)]}else{return document.querySelector(el)}}
  const on=(type,el,listener,all=false)=>{let selectEl=select(el,all)
  if(selectEl){if(all){selectEl.forEach(e=>e.addEventListener(type,listener))}else{selectEl.addEventListener(type,listener)}}}
  const onscroll=(el,listener)=>{el.addEventListener('scroll',listener)}
  on('click','.mobile-nav-toggle',function(e){select('#navbar').classList.toggle('navbar-mobile')
  this.classList.toggle('bi-list')
  this.classList.toggle('bi-x')})
  on('click','.guide',function(e){const info=select('.infoGuide')
  info.style.display='block'})
  on('click','.infoGuide .bi-x',function(e){const info=select('.infoGuide')
  info.style.display='none'})})()