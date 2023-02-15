import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="app-release.apk" download>Android APKをダウンロードする (app-release.apk)</a>
    <a href="app-debug.apk" download>Android APKをダウンロードする (app-debug.apk)</a>
  </div>
`