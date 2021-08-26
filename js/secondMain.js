fetch('./js/thing.json')
  .then(response => response.json())
  .then(fun);



function fun(data) {
  let body = document.getElementById("mainThing");
  data.forEach(element => {
    body.innerHTML += element.data
  });
}