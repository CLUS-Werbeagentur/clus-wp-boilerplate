function createProxyUrls() {
  const devServer = 'http://localhost:3000'
  const links = document.querySelectorAll('a')
  Array.prototype.map.call(links, function loopOverLinks(link) {
    const url = link.getAttribute('href')
    if (url) {
      const newurl = url.replace('http://webpack-playground.test', devServer)
      link.setAttribute('href', newurl)
      link.setAttribute('data-routelink', newurl)
    }
  })
}

document.addEventListener('DOMContentLoaded', function DOMContentLoaded() {
  console.loh('create proxy urls.')
  createProxyUrls()
})
