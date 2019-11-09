document.addEventListener("DOMContentLoaded", function() {
  chrome.tabs.getSelected(null, function(tab) {
    document.querySelector("#domain").innerHTML = tab.url;
  });
});
