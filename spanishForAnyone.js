const screenWidth = window.innerWidth;

if (screenWidth > 1200) {
  document.getElementById("if").innerText = "Hello JavaScript";
}
else {
  document.getElementById("if").innerText = "Hello JavaScript on a small screen";
  document.getElementById("if").style.color = "red";
}
if (screenWidth > 1200) {
  document.querySelectorAll('h5')[0].style.border = "10px solid orange";
  document.querySelectorAll('h5')[1].style.border = "10px solid orange";
  document.querySelectorAll('h5')[3].style.border = "10px solid orange";
}
document.getElementById("demo").innerHTML = "Screen width is " + window.innerWidth + " pixels";
