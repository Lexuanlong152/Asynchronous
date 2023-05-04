function httpGetAsyn(Url, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);
  };
  xmlHttp.open("GET", Url, true);
  xmlHttp.send(null);
}
// callback hell
httpGetAsyn("https://picsum.photos/200/300", (data) => {
  document.getElementById("img_1").setAttribute("src", data.responseURL);

  httpGetAsyn("https://picsum.photos/200/300", (data) => {
    document.getElementById("img_2").setAttribute("src", data.responseURL);

    httpGetAsyn("https://picsum.photos/200/300", (data) => {
      document.getElementById("img_3").setAttribute("src", data.responseURL);
    });
  });
});
