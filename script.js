function setupStandaloneLinks() {
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    (function(link) {
      link.onclick = function(e) {
        var href = link.getAttribute("href");
        if (!href || link.className.indexOf("external") !== -1) {
          return true;
        }
        window.location = href;
        return false;
      };
    })(links[i]);
  }
}
window.onload = setupStandaloneLinks;
