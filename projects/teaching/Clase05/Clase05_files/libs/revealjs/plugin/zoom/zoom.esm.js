/*!
 * reveal.js Zoom plugin
 */
var e={id:"zoom",init:function(e){e.getRevealElement().addEventListener("mousedown",function(n){var o=/Linux/.test(window.navigator.platform)?"ctrl":"alt",i=(e.getConfig().zoomKey?e.getConfig().zoomKey:o)+"Key",d=e.getConfig().zoomLevel?e.getConfig().zoomLevel:2;n[i]&&!e.isOverview()&&(n.preventDefault(),t.to({x:n.clientX,y:n.clientY,scale:d,pan:!1}))})},destroy:function(){t.reset()}},t=function(){function e(e,t){var n=o();if(e.width=e.width||1,e.height=e.height||1,e.x-=(window.innerWidth-e.width*t)/2,e.y-=(window.innerHeight-e.height*t)/2,r)if(1===t)document.body.style.transform="";else{var d=n.x+"px "+n.y+"px",l="translate("+-e.x+"px,"+-e.y+"px) scale("+t+")";document.body.style.transformOrigin=d,document.body.style.transform=l}else 1===t?(document.body.style.position="",document.body.style.left="",document.body.style.top="",document.body.style.width="",document.body.style.height="",document.body.style.zoom=""):(document.body.style.position="relative",document.body.style.left=-(n.x+e.x)/t+"px",document.body.style.top=-(n.y+e.y)/t+"px",document.body.style.width=100*t+"%",document.body.style.height=100*t+"%",document.body.style.zoom=t);i=t,document.documentElement.classList&&(1!==i?document.documentElement.classList.add("zoomed"):document.documentElement.classList.remove("zoomed"))}function n(){var e=.12*window.innerWidth,t=.12*window.innerHeight,n=o();l<t?window.scroll(n.x,n.y-14/i*(1-l/t)):l>window.innerHeight-t&&window.scroll(n.x,n.y+(1-(window.innerHeight-l)/t)*(14/i)),d<e?window.scroll(n.x-14/i*(1-d/e),n.y):d>window.innerWidth-e&&window.scroll(n.x+(1-(window.innerWidth-d)/e)*(14/i),n.y)}function o(){return{x:void 0!==window.scrollX?window.scrollX:window.pageXOffset,y:void 0!==window.scrollY?window.scrollY:window.pageYOffset}}var i=1,d=0,l=0,s=-1,c=-1,r="transform"in document.body.style;return r&&(document.body.style.transition="transform 0.8s ease"),document.addEventListener("keyup",function(e){1!==i&&27===e.keyCode&&t.out()}),document.addEventListener("mousemove",function(e){1!==i&&(d=e.clientX,l=e.clientY)}),{to:function(o){if(1!==i)t.out();else{if(o.x=o.x||0,o.y=o.y||0,o.element){var d=o.element.getBoundingClientRect();o.x=d.left-20,o.y=d.top-20,o.width=d.width+40,o.height=d.height+40}void 0!==o.width&&void 0!==o.height&&(o.scale=Math.max(Math.min(window.innerWidth/o.width,window.innerHeight/o.height),1)),o.scale>1&&(o.x*=o.scale,o.y*=o.scale,e(o,o.scale),!1!==o.pan&&(s=setTimeout(function(){c=setInterval(n,1e3/60)},800)))}},out:function(){clearTimeout(s),clearInterval(c),e({x:0,y:0},1),i=1},magnify:function(e){this.to(e)},reset:function(){this.out()},zoomLevel:function(){return i}}}();export default function(){return e};