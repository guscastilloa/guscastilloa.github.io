var PdfExport=function(e){function t(){var e=/\b[^/]+\/reveal.css$/i,t=Array.from(document.querySelectorAll("link")).find(function(t){return t.attributes.href&&t.attributes.href.value.search(e)>=0});return t?t.attributes.href.value.replace(e,""):(console.error("reveal.css could not be found in included <link> elements. Did you rename this file?"),"")}function n(e){var n=document.querySelector("#print");n||((n=document.createElement("link")).rel="stylesheet",n.id="print",document.querySelector("head").appendChild(n));var r="paper";e&&(r="pdf"),n.href=t()+"css/print/"+r+".css"}function r(){}function o(){}function i(){if(a()){var e=p.getConfig().pdfExportShortcut||"E";window.addEventListener("keydown",function(t){if("BODY"==t.target.nodeName.toUpperCase()&&(t.key.toUpperCase()==e.toUpperCase()||t.keyCode==e.toUpperCase().charCodeAt(0)))return t.preventDefault(),c(),!1},!0)}}function a(){return/print-pdf/gi.test(window.location.search)}function c(){var e=new URL(document.URL),t=new URLSearchParams(e.searchParams);a()?t["delete"]("print-pdf"):t.set("print-pdf",""),e.search=t.toString()?"?"+t.toString():"",window.location.href=e.toString()}function d(){var e=p.getConfig().pdfExportShortcut||"E";p.addKeyBinding({keyCode:e.toUpperCase().charCodeAt(0),key:e.toUpperCase(),description:"PDF export mode"},c),l()}function u(){d(),f(a())}var p=e,f=null,l=null,s={};return p&&p.VERSION&&p.VERSION.length&&"3"==p.VERSION[0]?(f=n,l=o,u()):(f=r,l=i,s.id="pdf-export",s.init=function(e){p=e,u()},s.togglePdfExport=function(){c()}),s}(Reveal);