window.addEventListener('DOMContentLoaded', () => {
  console.log('privet')
  const body = document.querySelector('body');
  let textNodes = [];


  function recursy(element) {
    element.childNodes.forEach(node => {
      console.log(node.nodeName)
      if (node.nodeName == "H2") {
        const obj = {
          header: node.nodeName,
          content: node.textContent,
        };
        textNodes.push(obj);
      } else {
        recursy(node);
      }
    });
  }
  recursy(body);
  console.log(textNodes);

  fetch("../services/my.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(textNodes),
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
})
