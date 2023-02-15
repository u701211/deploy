import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
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
`