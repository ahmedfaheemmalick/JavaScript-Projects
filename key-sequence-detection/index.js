const keys = [];
const keyToMatch = "ahmed";

window.addEventListener("keyup", (e) => {
  keys.push(e.key);
  console.log(
    keys.splice(keyToMatch.length - 1, keys.length - keyToMatch.length)
  );
});
