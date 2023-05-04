function httpGetAsyn(Url, resolve) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) resolve(xmlHttp);
  };
  xmlHttp.open("GET", Url, true);
  xmlHttp.send(null);
}

const currentPromise1 = new Promise((resolve, reject) => {
  httpGetAsyn("https://picsum.photos/200/300", resolve);
});
const currentPromise2 = new Promise((resolve, reject) => {
  httpGetAsyn("https://picsum.photos/200/300", resolve);
});
const currentPromise3 = new Promise((resolve, reject) => {
  httpGetAsyn("https://picsum.photos/200/300", resolve);
});

currentPromise1
  .then((data) => {
    document.getElementById("img_1").setAttribute("src", data.responseURL);

    return currentPromise2;
  })
  .then((data) => {
    document.getElementById("img_2").setAttribute("src", data.responseURL);

    return currentPromise3;
  })
  .then((data) => {
    document.getElementById("img_3").setAttribute("src", data.responseURL);
  })
  .catch((err) => {
    console.log(err);
  });
