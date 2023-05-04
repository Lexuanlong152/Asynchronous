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

const excuteAsyn = async () => {
  try {
  const respone1 = await currentPromise1;
  document.getElementById("img_1").setAttribute("src", respone1.responseURL);

  const respone2 = await currentPromise2;
  document.getElementById("img_2").setAttribute("src", respone2.responseURL);
  
  const respone3 = await currentPromise3;
  document.getElementById("img_3").setAttribute("src", respone3.responseURL);
  }
  catch(err){
    console.log(err)
  }
};

excuteAsyn();
