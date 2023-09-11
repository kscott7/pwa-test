const content = document.getElementById("content");

if (navigator.userAgent.match(/iPhone/i)) {
  // do iPhone stuff
  console.log("iPhone");
  document.body.classList.add("ios");
  content.innerHTML = `<a href="/ios/">Get started!</a>`;
} else if (navigator.userAgent.match(/Android/i)) {
  // do Android stuff
  console.log("Android");
  document.body.classList.add("android");
  content.innerHTML = `<a href="/android/">Get started!</a>`;
} else {
  // do desktop stuff
  console.log("Something else");
  document.body.classList.add("other");
  content.innerHTML = `<p>QR code</p>`;
}
 