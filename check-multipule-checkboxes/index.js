let lastChecked;
const checkboxes = document.querySelectorAll("input[type='checkbox']");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", function (e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
      checkboxes.forEach((checkbox) => {
        if (checkbox === this || checkbox === lastChecked) {
          inBetween = !inBetween;
        }

        if (inBetween) {
          checkbox.checked = true;
        }
      });
    }
    lastChecked = this;
  });
});
