import{a as v,t as u,b as P,c as rt}from"../chunks/disclose-version.CFatPvtM.js";import{i as at}from"../chunks/legacy.DP0RVtXk.js";import{h as V,G as it,Z as st,ad as ot,aA as nt,aH as lt,a9 as E,aI as ct,p as j,e as L,n as D,g as n,r as s,t as I,i as h,m as w,l as _,k as dt,j as vt,o as O,f as U}from"../chunks/runtime.kuqE-DHB.js";import{d as Y,a as S,e as gt}from"../chunks/store.vDl6F9IY.js";import{s as $}from"../chunks/snippet.D1UKoWDs.js";import{p as q,i as J,c as ht,r as ut,b as pt,s as Z}from"../chunks/legacy-client.DNK4qyXc.js";import{e as B,i as G,m as z}from"../chunks/index.C25RlOih.js";import{c as ft}from"../chunks/svelte-component.CR1A1ac-.js";function X(e,t){V&&it(st(e)),ot(()=>{var r=t();for(var a in r){var i=r[a];i?e.style.setProperty(a,i):e.style.removeProperty(a)}}),nt(()=>{e.remove()})}function A(e,t,r,a){var i=e.__attributes??(e.__attributes={});V&&(i[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||i[t]!==(i[t]=r)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[lt]=r),r==null?e.removeAttribute(t):typeof r!="string"&&_t(e).includes(t)?e[t]=r:e.setAttribute(t,r))}var R=new Map;function _t(e){var t=R.get(e.nodeName);if(t)return t;R.set(e.nodeName,t=[]);for(var r,a=E(e),i=Element.prototype;i!==a;){r=ct(a);for(var o in r)r[o].set&&t.push(o);a=E(a)}return t}function mt(e){return function(...t){var r=t[0];r.target===this&&(e==null||e.apply(this,t))}}function kt(e){return function(...t){var r=t[0];return r.stopPropagation(),e==null?void 0:e.apply(this,t)}}const bt=(e,t,r)=>{t()&&(window.location.href=t()),r()&&r()()};var yt=u('<button class="link-button svelte-cm5mli"><!></button>');function C(e,t){j(t,!0);let r=q(t,"href",3,null),a=q(t,"onClick",3,()=>null);var i=yt();i.__click=[bt,r,a];var o=n(i);$(o,()=>t.children??D),s(i),v(e,i),L()}Y(["click"]);var xt=u('<img class="svelte-1e43yra">'),wt=u('<div class="card-container svelte-1e43yra"><a class="svelte-1e43yra"><div class="stock-img svelte-1e43yra"><!></div></a> <div class="card-text svelte-1e43yra"><div><h3 class="svelte-1e43yra"> </h3> <div class="description-text"> </div></div> <div class="button-link-area svelte-1e43yra"><!></div></div></div>');function tt(e,t){let r=q(t,"appLink",3,null);var a=wt(),i=n(a),o=n(i),g=n(o);J(g,()=>t.imgSrc,f=>{var b=xt();I(()=>{A(b,"src",t.imgSrc),A(b,"alt",t.alt)}),v(f,b)}),s(o),s(i);var c=h(i,2),d=n(c),l=n(d),m=n(l,!0);s(l);var y=h(l,2),T=n(y,!0);s(y),s(d);var p=h(d,2),x=n(p);J(x,()=>t.srcLink,f=>{C(f,{get href(){return t.srcLink},children:(b,k)=>{w();var et=P("View Code");v(b,et)},$$slots:{default:!0}})}),s(p),s(c),s(a),I(()=>{A(i,"href",r()),S(m,t.title),S(T,t.descriptionText)}),v(e,a)}var Pt=(e,t)=>_(t).close(),Ct=u('<dialog><div><div class="header-bar"><!> <img class="close-icon" src="/close.svg" alt="close-icon"></div> <hr> <div class="modal-content"><!></div></div></dialog>');function K(e,t){j(t,!0);const r=ht();let a=vt(void 0);ut(()=>{_(a)&&_(a).showModal()});var i=Ct(),o=O(()=>mt(()=>_(a).close()));i.__click=function(...p){var x;(x=_(o))==null||x.apply(this,p)};var g=n(i),c=O(()=>kt(r("click")));g.__click=function(...p){var x;(x=_(c))==null||x.apply(this,p)};var d=n(g),l=n(d);$(l,()=>t.header??D);var m=h(l,2);m.__click=[Pt,a],s(d);var y=h(d,4),T=n(y);$(T,()=>t.children??D),s(y),s(g),s(i),pt(i,p=>dt(a,p),()=>_(a)),I(()=>A(i,"index",t.index)),gt("close",i,function(...p){W==null||W.apply(this,p)}),v(e,i),L()}Y(["click"]);var It=u("<h2>Game Corner</h2>"),Tt=u('<div class="game-item svelte-sxkpu5"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div>'),At=u('<div class="game-array svelte-sxkpu5"></div>');function jt(e,t){K(e,{get index(){return t.index},header:a=>{var i=It();v(a,i)},children:(a,i)=>{var o=At();B(o,21,()=>Rt,G,(g,c)=>{var d=Tt(),l=n(d);X(l,()=>({"--buttonWidth":"100%"})),tt(l.lastChild,Z(()=>_(c))),s(l),s(d),v(g,d)}),s(o),v(a,o)},$$slots:{header:!0,default:!0}})}var Lt=u('<div class="tag-pill svelte-1s47p56"><!> <div><!></div></div>');function Dt(e,t){j(t,!0);var r=Lt(),a=n(r);J(a,()=>t.Icon,g=>{var c=rt(),d=U(c);ft(d,()=>t.Icon,(l,m)=>{m(l,{})}),v(g,c)});var i=h(a,2),o=n(i);$(o,()=>t.children??D),s(i),s(r),I(()=>A(r,"style",`background: ${t.color||"#818a91"};`)),v(e,r),L()}var St=u('<div class="sidebar" i=""><h3 class="tag-list-title svelte-y6ok78"> </h3> <div class="tag-list svelte-y6ok78"></div></div>');function M(e,t){var r=St(),a=n(r),i=n(a,!0);s(a);var o=h(a,2);B(o,21,()=>t.tagList,G,(g,c)=>{Dt(g,{get Icon(){return _(c).icon},get color(){return _(c).color},children:(d,l)=>{w();var m=P();I(()=>S(m,_(c).tag)),v(d,m)},$$slots:{default:!0}})}),s(o),s(r),I(()=>S(i,t.title)),v(e,r)}const N={title:"Experienced In",tags:[{tag:"React/Node",color:"#61DBFB"},{tag:"Java/Spring",color:"#ED1D25"},{tag:"AWS",color:"#FF9900"},{tag:"C#",color:"#684D95"},{tag:"GraphQl",color:"#E10098"},{tag:"Docker",color:"#1D63ED"},{tag:"Android Development",color:"#3DDC84"},{tag:"C",color:"#283593"},{tag:"Apache Cassandra",color:"#bbe6fb"},{tag:"Python",color:"#FFE873"},{tag:"Lua",color:"#00007D"},{tag:"svelte",color:"#FF3E00"}]},Q={title:"Exploring",tags:[{tag:"Pico-8",color:"#000"},{tag:"Rust",color:"#e74c21"},{tag:"GoLang",color:"#00ADD8"},{tag:"Flutter",color:"#0553B1"}]},H={title:"Hobbies",tags:[{tag:"Cooking"},{tag:"Running"},{tag:"Photography"},{tag:"Digital Art"},{tag:"Hiking"}]};var $t=u("<h2>About Justin Kuennen</h2>"),Mt=u(`<div class="about-me-content svelte-1p1fbl0"><div class="pic-section svelte-1p1fbl0"><img src="/justink.jpg" alt="me in a bedroom" class="svelte-1p1fbl0"> <div class="skill-section svelte-1p1fbl0"><!> <!> <!></div></div> <div class="about-me-paragraph svelte-1p1fbl0">Hey! I am a Full Stack Senior Developer based in Iowa! Glad to have
            you here to look at some of the creative work I have done. Besides
            my main job I do a lot of side hobby's like photography and
            painting. I am currently working at QCI in West Des Moines, working
            with John Deere on the Onlink Project. Thank for stopping by!</div></div>`);function Ft(e,t){j(t,!0),K(e,{get index(){return t.index},header:a=>{var i=$t();v(a,i)},children:(a,i)=>{var o=Mt(),g=n(o),c=h(n(g),2),d=n(c);M(d,{get title(){return N.title},get tagList(){return N.tags}});var l=h(d,2);M(l,{get title(){return Q.title},get tagList(){return Q.tags}});var m=h(l,2);M(m,{get title(){return H.title},get tagList(){return H.tags}}),s(c),s(g),w(2),s(o),v(a,o)},$$slots:{header:!0,default:!0}}),L()}var Wt=u("<h2>Projects Page</h2>"),qt=u('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1),Jt=u('<div class="project-list svelte-16kimc5"></div>');function Bt(e,t){K(e,{get index(){return t.index},header:a=>{var i=Wt();v(a,i)},children:(a,i)=>{var o=Jt();B(o,21,()=>Nt,G,(g,c)=>{var d=qt(),l=U(d);X(l,()=>({"--picWidth":"30rem","--picMaxHeight":"300px","--buttonWidth":"80%","--imgFit":_(c).imgFit||"cover"})),tt(l.lastChild,Z(()=>_(c))),s(l),v(g,d)}),s(o),v(a,o)},$$slots:{header:!0,default:!0}})}const Gt={gameCorner:jt,aboutMe:Ft,projectsPage:Bt},Kt="gameCorner",Et="aboutMe",Ot="projectsPage",Rt=[{appLink:"https://imjustintime.github.io/asteroids.js/",alt:"AsteroidsJs Screenshot",imgSrc:"/AsteroidsJs.png",descriptionText:"A web version of the classic game asteroids written in vanilla javascript with the ability to save local highscores.",srcLink:"https://github.com/ImJustinTIme/asteroids.js",title:"AsteroidsJs"}],Nt=[{alt:"Dri-Stack Website",imgSrc:"DriStack.png",descriptionText:"First projected worked on at QCI for a startup trying to dry corn and grain faster using Iot devices.I Make the website side in React with the ant design UI library. The backend is written in C# with MySql database. Also was the first time using Threejs to model a grain bin to show the status of it in real time.",title:"QCI Work: Dri-Stack Website"},{alt:"Onlink Redesign",imgSrc:"/Onlink.png",descriptionText:"Current project that I have been working on for the last couple of years. Working with John Deere to redesign and overhaul a startup bought by them called Onlink. The Website is now written in React with a java backend. We are currently working on changing out the backend database from cassandra to PostGreSQL.",title:"QCI Work: Onlink Redesign"},{alt:"Tetris Clock",imgSrc:"/tetris clock.png",descriptionText:"A work in progress clock made with a Matrix Portal M4 and a dot matrix display on it. The idea is to have tetriminos fall down and form the numbers displaying the time.",srcLink:"https://github.com/ImJustinTIme/tetris-clock",title:"Tetris Clock"},{title:"Kitchen Korner",imgSrc:"/KitchenKorner.png",imgFit:"contain",alt:"Kitchen Korner",descriptionText:"Android app build at Iowa State University for COMS 309. It lets the user save and search for recipes from a variety of online apis. Writen in Kotlin",srcLink:"https://github.com/ImJustinTIme/kitchenkorner"}],F=e=>{const t=Gt[e];z.update(r=>[...r,t])},W=()=>{z.set([])};var Qt=u('<div class="page-content svelte-rxq5b7"><div class="content svelte-rxq5b7"><div class="titlebar svelte-rxq5b7"><span class="title svelte-rxq5b7">codejustin.dev</span></div> <div class="link-map svelte-rxq5b7"><div class="link-container svelte-rxq5b7"><!></div> <div class="link-container svelte-rxq5b7"><!></div> <div class="link-container svelte-rxq5b7"><!></div> <div class="link-container svelte-rxq5b7"><!></div> <div class="link-container svelte-rxq5b7"><!></div></div></div></div>');function ee(e,t){j(t,!1),at();var r=Qt(),a=n(r),i=h(n(a),2),o=n(i),g=n(o);C(g,{onClick:()=>F(Kt),children:(f,b)=>{w();var k=P();k.nodeValue="Game Corner",v(f,k)},$$slots:{default:!0}}),s(o);var c=h(o,2),d=n(c);C(d,{onClick:()=>F(Et),children:(f,b)=>{w();var k=P("About Me");v(f,k)},$$slots:{default:!0}}),s(c);var l=h(c,2),m=n(l);C(m,{onClick:()=>F(Ot),children:(f,b)=>{w();var k=P();k.nodeValue="Projects Page",v(f,k)},$$slots:{default:!0}}),s(l);var y=h(l,2),T=n(y);C(T,{href:"https://justink.photo",children:(f,b)=>{w();var k=P("Photography & Art");v(f,k)},$$slots:{default:!0}}),s(y);var p=h(y,2),x=n(p);C(x,{href:"https://blog.codejustin.dev",children:(f,b)=>{w();var k=P("Blog");v(f,k)},$$slots:{default:!0}}),s(p),s(i),s(a),s(r),v(e,r),L()}export{ee as component};
