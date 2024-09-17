var t=document.querySelectorAll(".population"),e=document.querySelector(".total-population"),o=document.querySelector(".average-population"),n=0;t.forEach(function(t){var e=Number(t.textContent.trim().replaceAll(",",""));n+=e});var l=Math.ceil(n/t.length);e.textContent=n.toLocaleString("en-US"),o.textContent=l.toLocaleString("en-US");
//# sourceMappingURL=index.9d439636.js.map
