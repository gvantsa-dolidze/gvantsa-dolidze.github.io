function myFunction() {
  const x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function showLinksIfWide(event) {
  const x = document.getElementById("myLinks");

  x.style.display = document.body.clientWidth > 375 ? "block" : "none";
}

window.addEventListener('resize', showLinksIfWide);

window.addEventListener('load', showLinksIfWide);
