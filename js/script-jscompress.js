if(document.querySelector(".gallery-sliders")&&document.querySelector(".service-sliders")){function a(a){a.addEventListener("click",function(){b(a)})}function b(a){if("gallery-group"===a.name){c.classList.remove("gallery-perforator"),c.classList.remove("gallery-drill");for(let b=0;b<d.length;b++)a.checked===d[b].checked?(c.classList.toggle(a.value),e[b].classList.add("gallery-slider-active"),f[b].classList.add("gallery-radio-active")):(e[b].classList.remove("gallery-slider-active"),f[b].classList.remove("gallery-radio-active"))}if("service-group"===a.name){g.classList.remove("service-delivery"),g.classList.remove("service-guarantee"),g.classList.remove("service-discount");for(let b=0;b<h.length;b++)a.checked===h[b].checked?(g.classList.toggle(a.value),j[b].classList.add("service-slider-active"),k[b].classList.add("service-item-active")):(j[b].classList.remove("service-slider-active"),k[b].classList.remove("service-item-active"))}}const c=document.querySelector(".gallery-sliders");let d=document.querySelectorAll(".gallery-filter input"),e=document.querySelectorAll(".gallery-slider"),f=document.querySelectorAll(".gallery-radio-button");const g=document.querySelector(".service-sliders");let h=document.querySelectorAll(".service-filter input"),j=document.querySelectorAll(".service-slider"),k=document.querySelectorAll(".service-item");for(let b=0;b<d.length;b++)a(d[b]);for(let b=0;b<h.length;b++)a(h[b])}if(document.querySelector(".map-link")){const a=document.querySelector(".map-link"),b=document.querySelector(".modal-map"),c=b.querySelector(".modal-close");a.addEventListener("click",function(a){a.preventDefault(),b.classList.add("modal-map-show")}),c.addEventListener("click",function(a){a.preventDefault(),b.classList.remove("modal-map-show")}),window.addEventListener("keydown",function(a){27===a.keyCode&&b.classList.contains("modal-map-show")&&(a.preventDefault(),b.classList.remove("modal-map-show"))})}if(document.querySelector(".contact-link")){const a=document.querySelector(".contact-link"),b=document.querySelector(".modal-feedback"),c=b.querySelector(".modal-close"),d=b.querySelector(".modal-feedback-form");let e=b.querySelector(".modal-feedback-name"),f=b.querySelector(".modal-feedback-email"),g=b.querySelector(".modal-feedback-message"),h=!0,i="";try{i=localStorage.getItem("name")}catch(a){h=!1}let j=!0,k="";try{k=localStorage.getItem("email")}catch(a){j=!1}a.addEventListener("click",function(a){a.preventDefault(),b.classList.add("modal-feedback-show"),i&&k?(e.value=i,f.value=k,g.focus()):i&&!k?(e.value=i,f.focus()):k&&!i?(f.value=k,e.focus()):e.focus()}),c.addEventListener("click",function(a){a.preventDefault(),b.classList.remove("modal-feedback-show"),b.classList.remove("modal-feedback-error")}),d.addEventListener("submit",function(a){e.value&&f.value&&g.value?(h&&localStorage.setItem("name",e.value),j&&localStorage.setItem("email",f.value)):(a.preventDefault(),b.classList.remove("modal-feedback-error"),b.offsetWidth=b.offsetWidth,b.classList.add("modal-feedback-error"))}),window.addEventListener("keydown",function(a){27===a.keyCode&&b.classList.contains("modal-feedback-show")&&(a.preventDefault(),b.classList.remove("modal-feedback-show"),b.classList.remove("modal-feedback-error"))})}if(document.querySelector(".bookmark-link")){const a=document.querySelector(".modal-bookmark"),b=a.querySelector(".modal-close"),c=document.querySelector(".bookmark-link"),d=document.querySelectorAll(".bookmark-link span")[1];let e=document.querySelectorAll(".bookmark-button"),f=0;for(let b=0;b<e.length;b++)e[b].addEventListener("click",function(b){b.preventDefault(),f=parseInt(d.textContent)+1,d.textContent=f,c.classList.contains("bookmark-link-active")||c.classList.add("bookmark-link-active"),a.classList.add("modal-bookmark-show")});b.addEventListener("click",function(b){b.preventDefault(),a.classList.remove("modal-bookmark-show")}),window.addEventListener("keydown",function(b){27===b.keyCode&&a.classList.contains("modal-bookmark-show")&&(b.preventDefault(),a.classList.remove("modal-bookmark-show"))})}if(document.querySelector(".basket-link")){const a=document.querySelector(".modal-basket"),b=a.querySelector(".modal-close"),c=document.querySelector(".basket-link"),d=document.querySelectorAll(".basket-link span")[1];let e=document.querySelectorAll(".basket-button"),f=0;for(let b=0;b<e.length;b++)e[b].addEventListener("click",function(b){b.preventDefault(),f=parseInt(d.textContent)+1,d.textContent=f,c.classList.contains("basket-link-active")||c.classList.add("basket-link-active"),a.classList.add("modal-basket-show")});b.addEventListener("click",function(b){b.preventDefault(),a.classList.remove("modal-basket-show")}),window.addEventListener("keydown",function(b){27===b.keyCode&&a.classList.contains("modal-basket-show")&&(b.preventDefault(),a.classList.remove("modal-basket-show"))})}const stopPopup=document.querySelector(".modal-stop"),stopClose=stopPopup.querySelector(".modal-close");let currentPage=window.location.href,pageLink=document.querySelectorAll("a[href]");for(let a=0;a<pageLink.length;a++)pageLink[a].href===currentPage&&pageLink[a].addEventListener("click",function(a){a.preventDefault(),stopPopup.classList.add("modal-stop-show")});stopClose.addEventListener("click",function(a){a.preventDefault(),stopPopup.classList.remove("modal-stop-show")}),window.addEventListener("keydown",function(a){27===a.keyCode&&stopPopup.classList.contains("modal-stop-show")&&(a.preventDefault(),stopPopup.classList.remove("modal-stop-show"))});