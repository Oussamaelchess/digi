alert("Hello! I am an alert box!!");

function changeColor(newColor) {
  var elem = document.getElementById('para',);
  elem.style.color = newColor;
}


function download(dataurl, filename) {
  const clink = document.createElement("a");
  clink.href = dataurl;
  clink.download = filename;
  clink.click();
}
