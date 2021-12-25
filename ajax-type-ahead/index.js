let list = [];
let search = "";

fetch(
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
)
  .then((res) => res.json())
  .then((data) => list.push(...data));

const getData = (list, search) => {
  if (search) {
    list = list.filter((item) =>
      item.city.trim().toLowerCase().includes(search.trim().toLowerCase())
    );
  }

  const html = list
    .map((item) => {
      return `<div class="card">
                <p>City Name: ${item.city}</p>
                <p>State Name: ${item.state}</p>
                <p>Rank: ${item.rank}</p>
              </div>`;
    })
    .join("");

  document.getElementById("cards").innerHTML = html;
};

window.onload = () => {
  getData(list, search);
};

document.getElementById("search").addEventListener("keyup", (e) => {
  search = e.target.value;
  getData(list, e.target.value);
});
