(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&a(t)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();document.querySelector("#app").innerHTML=`
  <div>
    <h3>ガワアプリ</h3>
    <a href="download/gawa/app-release.apk" download>Android APKをダウンロードする (app-release.apk)</a> <br/>
    <a href="download/gawa/app-debug.apk" download>Android APKをダウンロードする (app-debug.apk)</a>
    <br/>
    <br/>
    <br/>
    <h3>Flutterアプリテンプレート</h3>
    <a href="download/template/app-release.apk" download>Android APKをダウンロードする (app-release.apk)</a> <br/>
    <a href="download/template/app-debug.apk" download>Android APKをダウンロードする (app-debug.apk)</a>
  </div>
`;
