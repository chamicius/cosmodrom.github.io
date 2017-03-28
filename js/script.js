var el = document.getElementById("big");
el.addEventListener("click", function() {
  this.disabled = true;
  setTimeout(function() {
    document.body.classList.remove("noOverflow");
  }, 3000);
})
