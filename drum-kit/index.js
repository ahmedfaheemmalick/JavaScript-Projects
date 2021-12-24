window.addEventListener("keydown", (e) => {
  const keyName = e.key;
  if (keyName.length === 1 && keyName.match(/[a-z]/i)) {
    const audio = new Audio(`./audios/${keyName}.mp3`);
    audio.currentTime = 0;
    audio.play();
  }
});

let buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const innerText = e.target.innerText;
    if (innerText.length === 1 && innerText.match(/[a-z]/i)) {
      const audio = new Audio(`./audios/${innerText.toLowerCase()}.mp3`);
      console.log(audio);
      audio.currentTime = 0;
      audio.play();
    }
  });
});
