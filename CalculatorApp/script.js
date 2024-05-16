const numButt = document.querySelectorAll(".num");
const displayContent = document.getElementsByClassName("display-content")[0];
numButt.forEach((butt) => {
  butt.addEventListener("click", (e) => {
    displayContent.innerText = e.target.innerText;
  });
});
