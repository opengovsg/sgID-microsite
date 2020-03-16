var userAgent = navigator.userAgent || navigator.vendor || window.opera
if (/android/i.test(userAgent)) {
  document.querySelectorAll(".download-container").forEach(function(el) {
    el.classList.add("android")
  })
} else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
  document.querySelectorAll(".download-container").forEach(function(el) {
    el.classList.add("ios")
  })
}