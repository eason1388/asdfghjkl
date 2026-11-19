(function(){
  document.documentElement.classList.add('js');
  var y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
  var header=document.querySelector('.header'), toTop=document.querySelector('.to-top');
  function onScroll(){var s=window.scrollY; if(header) header.classList.toggle('scrolled',s>10); if(toTop) toTop.classList.toggle('show',s>600);}
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
  var toggle=document.querySelector('.nav-toggle'), nav=document.querySelector('.nav');
  if(toggle&&nav){toggle.addEventListener('click',function(){var o=nav.classList.toggle('open');toggle.classList.toggle('open',o);toggle.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':'';});}
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.08,rootMargin:'0px 0px -40px 0px'});
    els.forEach(function(el){io.observe(el);});
  } else els.forEach(function(el){el.classList.add('in');});
  // inquiry form -> mailto
  var f=document.getElementById('inquiry');
  if(f){f.addEventListener('submit',function(ev){ev.preventDefault();
    var d=new FormData(f), g=function(k){return (d.get(k)||'').toString().trim();};
    var subject='【網站詢價】'+(g('category')||'產品洽詢')+' - '+(g('company')||g('name'));
    var body=['公司名稱：'+g('company'),'聯絡人：'+g('name'),'聯絡電話：'+g('phone'),'電子郵件：'+g('email'),'產品類別：'+g('category'),'預計數量：'+g('qty'),'','需求說明：',g('message')].join('\n');
    window.location.href='mailto:artisticmagpkj54@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  });}
})();
