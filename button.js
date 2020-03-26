updateBtn();

function updateBtn() {
  let btn = document.querySelector("#btn");
  let newV;
  function listen() {
    return btn.addEventListener("click", getResult);
  }
  listen();
  function getResult(e) {
    newV = parseFloat(btn.value++);
    return (btn.textContent = newV);
  }
}
