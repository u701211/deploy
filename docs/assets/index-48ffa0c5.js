(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();document.querySelector("#app").innerHTML=`
  <div>
    <h3>ガワアプリ（機能サンプル）</h3>
    <a href="GAWASample/app-release.apk" download>リリース用をダウンロード(app-release.apk)</a> <br/>
    <br/>
    <br/>
    <h3>ガワアプリ（SPA組み込み版）</h3>
    <a href="SPAInGAWA/app-release.apk" download>リリース用をダウンロード(app-release.apk)</a> <br/>
  </div>
`;
