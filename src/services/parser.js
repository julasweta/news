window.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  let textNodes = [];

  function recursy(element) {
   element.childNodes.forEach(node => {
      if (node.className == "list-news__item") {
        const obj = {
          name: node.children[1].children[0].children[0].innerText,
          description: "",
          thumbnail: node.children[0].children[0].dataset.src,
          homepage: node.children[1].children[0].children[0].href,
          id: "",
          breed: node,
        };
        textNodes.push(obj);
      } else {
        recursy(node);
      }
    });
  }
  recursy(body);
  console.log(textNodes);

  let url = "https://julasweta.ucoz.net/my.json";
  //let url = "https://my-json-server.typicode.com/julasweta/repo/jsonarray";

 fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(textNodes),
  })
    .then(response => response.json())
    //.then(json => console.log(json));




})

/* https://www.unian.ua/   */
