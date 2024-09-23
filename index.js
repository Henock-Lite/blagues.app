// https://api.blablagues.net/?rub=blagues

const app = document.querySelector(".app");
function work() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      head.textContent = `${data.data.content.text_head}`;
      content.textContent =
        data.data.content.text !== ""
          ? data.data.content.text
          : data.data.content.text_hidden;
      console.log(data.data);
    });
}

app.addEventListener("click", () => {
  start.style.display="none";
  work();
});
