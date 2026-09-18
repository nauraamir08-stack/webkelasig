// HERO CLASS — shared JS for all pages

// Source: index.html
const target=new Date("2026-09-19T06:00:00+07:00").getTime();function tick(){let x=Math.max(0,target-Date.now()),d=Math.floor(x/86400000);x%=86400000;let h=Math.floor(x/3600000);x%=3600000;let m=Math.floor(x/60000),s=Math.floor(x%60000/1000);for(const [i,v] of Object.entries({d,h,m,s}))document.getElementById(i).textContent=String(v).padStart(2,"0")}tick();setInterval(tick,1000)

// Source: index.html