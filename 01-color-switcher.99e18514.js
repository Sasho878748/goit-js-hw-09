const t=document.getElementById("startBtn"),e=document.getElementById("stopBtn"),n=document.body;let d=null;t.addEventListener("click",(function(){d=setInterval((()=>{n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(d),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.99e18514.js.map
