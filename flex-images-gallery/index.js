const panelList = Array.from(document.getElementsByClassName("panel"))

panelList.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    e.target.classList.toggle("open")
  })
})
