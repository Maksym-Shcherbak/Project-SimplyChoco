(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();(()=>{const o=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),i=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),o.classList.toggle("is-open");const n=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};t.addEventListener("click",i),r.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(o.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();$(document).ready(function(){$(".hero-btn-list a, .mobile-navi-link").click(function(o){if($(this).attr("href").indexOf("#")!=-1){o.preventDefault();var t=$(this).attr("href").replace("#","");if($("#"+t).length>0){var r=$("body").find("#"+t).offset().top;$("html, body").animate({scrollTop:r},800)}}})});AOS.init();new Swiper(".reviews .swiper",{slidesPerView:1,spaceBetween:16,loop:!0,direction:"horizontal",pagination:{el:".swiper-pagination",clickable:!0},effect:"coverflow",coverflowEffect:{rotate:30,slideShadows:!0,depth:100,modifier:1,stretch:0},breakpoints:{768:{slidesPerView:2},1200:{slidesPerView:3,spaceBetween:28}}});new Swiper(".section-our-product .swiper",{slidesPerView:1,spaceBetween:18,loop:!0,direction:"horizontal",pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:"auto"},1200:{slidesPerView:4}}});(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};o.openModalBtn.addEventListener("click",t),o.closeModalBtn.addEventListener("click",t);function t(){o.modal.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}})();(()=>{const o={openModalBtn:document.querySelector("[buy-now-modal-open]"),closeModalBtn:document.querySelector("[buy-now-modal-close]"),closeSubmitBtn:document.querySelector("[buy-now-submit-close]"),modal:document.querySelector("[buy-now-modal]")};o.openModalBtn.addEventListener("click",t),o.closeModalBtn.addEventListener("click",t),o.closeSubmitBtn.addEventListener("click",t);function t(){o.modal.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}})();
