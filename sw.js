if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let d={};const o=e=>n(e,s),a={module:{uri:s},exports:d,require:o};i[s]=Promise.all(c.map((e=>a[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"1ed69dd40dbd1ad1285f9b2d7199561d"},{url:"android-chrome-512x512.png",revision:"174b3a480b6aefc2057e8fe30f6fd6cf"},{url:"apple-touch-icon.png",revision:"1ca2cee702eeec45d62ce96acf8b3f69"},{url:"assets/index-765ddcc4.css",revision:null},{url:"assets/index-cfe9910a.js",revision:null},{url:"favicon-16x16.png",revision:"a26bdc9643c14e1b407b183773286566"},{url:"favicon-32x32.png",revision:"0d47f9588175364cf9da87d77c5a3b93"},{url:"favicon.ico",revision:"259de5ace06c2e6276fb53573b7cfbb4"},{url:"index.html",revision:"91da5d2723357856815daf074d0bb3df"},{url:"mstile-144x144.png",revision:"696d27ee8eba2b836fb21bec651acb3b"},{url:"mstile-150x150.png",revision:"1c185a5c1d67aba8b12ac325154a3e47"},{url:"mstile-310x150.png",revision:"24039a360a209344b20280465e4c1c3c"},{url:"mstile-310x310.png",revision:"db3a3b070a57b8fa42806183dda43b51"},{url:"mstile-70x70.png",revision:"18b4e8ec6b7c014596da2db69df28eef"},{url:"registerSW.js",revision:"b91c4d630394590d5dbbb67dcf1b0407"},{url:"safari-pinned-tab.svg",revision:"73d1a49290480e539c9ebbb24641f26a"},{url:"favicon.ico",revision:"259de5ace06c2e6276fb53573b7cfbb4"},{url:"apple-touch-icon.png",revision:"1ca2cee702eeec45d62ce96acf8b3f69"},{url:"manifest.webmanifest",revision:"8ce038001e289cde20e2048eb116c438"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));