if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let l={};const d=e=>i(e,a),o={module:{uri:a},exports:l,require:d};s[a]=Promise.all(n.map((e=>o[e]||d(e)))).then((e=>(r(...e),l)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"ad647b582705c670417bd1c4bb5ad0f6"},{url:"android-chrome-512x512.png",revision:"f4ca1d00a5f1fad70cd18c557023c3bf"},{url:"apple-touch-icon.png",revision:"373e5e15d350b07351202754753e0f2b"},{url:"assets/HomeView-337b7ada.js",revision:null},{url:"assets/index-9389998b.css",revision:null},{url:"assets/index-be0ef690.js",revision:null},{url:"assets/list-4c83a4a3.js",revision:null},{url:"assets/ListView-1cfd68d9.css",revision:null},{url:"assets/ListView-a64d1010.js",revision:null},{url:"assets/materialdesignicons-webfont-48d3eec6.woff",revision:null},{url:"assets/materialdesignicons-webfont-861aea05.eot",revision:null},{url:"assets/materialdesignicons-webfont-bd725a7a.ttf",revision:null},{url:"assets/materialdesignicons-webfont-e52d60f6.woff2",revision:null},{url:"assets/SettingsView-340de1ad.js",revision:null},{url:"assets/SettingsView-c5deea11.css",revision:null},{url:"assets/tomato-fe6b03eb.png",revision:null},{url:"assets/VInput-d0e1d224.js",revision:null},{url:"assets/VInput-fe8650e4.css",revision:null},{url:"assets/VRow-20c8142b.js",revision:null},{url:"favicon-16x16.png",revision:"8b72fbab83e444e961e887a0c4bd57f1"},{url:"favicon-32x32.png",revision:"faa5925da74e9420b8b5c7913848515e"},{url:"favicon.ico",revision:"0cd8ff9d7b4e1add57380134e7db5362"},{url:"index.html",revision:"6b138d52727dbcc8ca92ed5b318b4de6"},{url:"mstile-150x150.png",revision:"48d6c3e060b983ba889818d716281060"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"safari-pinned-tab.svg",revision:"4ea43edbb9e76b0fc50d96debc0923b9"},{url:"splashscreens/ipad_splash.png",revision:"06f0d8cd48a2e99b22983bf5cde19eb7"},{url:"splashscreens/ipadpro1_splash.png",revision:"1dd97512340912533d5b0edcf6fbdb51"},{url:"splashscreens/ipadpro2_splash.png",revision:"c3711a0088c1e611af55b33036887cdb"},{url:"splashscreens/ipadpro3_splash.png",revision:"b399aad5d556130fddd76e3dbd0ec60d"},{url:"splashscreens/iphone5_splash.png",revision:"e8d4ab36a7f0404b229178a04baca414"},{url:"splashscreens/iphone6_splash.png",revision:"ede1d3fcf2e977d28ed71c58d42afb25"},{url:"splashscreens/iphoneplus_splash.png",revision:"0b1425800c1d2b52491ce63f3c926dfd"},{url:"splashscreens/iphonex_splash.png",revision:"fc54d12138475d9a922b402856e4db0e"},{url:"splashscreens/iphonexr_splash.png",revision:"b09c0ee9db39b5a2acdb945fc1d5c275"},{url:"splashscreens/iphonexsmax_splash.png",revision:"2bc5abfdab276c4de992ea4f8c26c045"},{url:"./android-chrome-192x192.png",revision:"ad647b582705c670417bd1c4bb5ad0f6"},{url:"./android-chrome-512x512.png",revision:"f4ca1d00a5f1fad70cd18c557023c3bf"},{url:"manifest.webmanifest",revision:"20d3fedf5d424126bcf77a45e95cf2a8"}],{ignoreURLParametersMatching:[/.*/]}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
