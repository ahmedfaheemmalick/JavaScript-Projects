window.addEventListener("keydown", (e) => {
  
  const keyName = e.key;
  if (keyName.length === 1 && keyName.match(/[a-z]/i)) {
    const audio = new Audio(`./audios/${keyName}.mp3`);
    audio.currentTime = 0;
    audio.play();
  }
});
