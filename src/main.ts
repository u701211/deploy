import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h3>ガワアプリ</h3>
    <a href="app-release.apk" download>リリース用をダウンロード(app-release.apk)</a> <br/>
  </div>
`

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <h3>ガワアプリ</h3>
    // <a href="app-release.apk" download>リリース用をダウンロード(app-release.apk)</a> <br/>
    // <a href="app-debug.apk" download>デバッグ用をダウンロード(app-debug.apk)</a>
//   </div>
// `