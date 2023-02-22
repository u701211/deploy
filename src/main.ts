import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h3>ガワアプリ（機能サンプル）</h3>
    <a href="GAWASample/app-release.apk" download>リリース用をダウンロード(app-release.apk)</a> <br/>
    <br/>
    <br/>
    <h3>ガワアプリ（SPA組み込み版）</h3>
    <a href="SPAInGAWA/app-release.apk" download>リリース用をダウンロード(app-release.apk)</a> <br/>
  </div>
`