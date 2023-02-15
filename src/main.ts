import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="download/gawa/app-release.apk" download>Android APKをダウンロードする (app-release.apk)</a> <br/>
    <a href="download/gawa/app-debug.apk" download>Android APKをダウンロードする (app-debug.apk)</a>
  </div>
`