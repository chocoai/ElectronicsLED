(function(window){var svgSprite='<svg><symbol id="icon-returnfanhuizuo" viewBox="0 0 1024 1024"><path d="M955.860087 881.84128l-31.91692-45.585221c-69.891813-101.759615-132.189671-165.578106-186.891528-191.456496-54.701856-25.832342-126.879736-38.747489-216.532615-38.747489l0 198.294229L69.230758 496.64836l451.28929-307.698964 0 198.294229c151.143349 1.518586 261.499759 37.607526 331.012949 108.264772S955.860087 675.949003 955.860087 824.859497L955.860087 881.84128zM484.051461 569.583486l18.234293 0c48.624441 0 85.470627 1.139963 110.540605 3.418866 25.071002 2.278903 56.598043 9.116635 94.593402 20.512173 37.986149 11.396561 73.694419 31.577183 107.11867 60.400648 33.43346 28.869514 68.384483 66.904783 104.85307 113.962541-7.605212-121.56059-44.451398-209.311143-110.551862-263.253706-66.090231-53.894468-168.277588-80.912821-306.553884-80.912821l-18.234293 0L484.051461 257.326716 133.045155 496.64836l351.007329 239.321644L484.052484 569.583486z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)