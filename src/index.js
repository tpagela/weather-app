import weather from "./modules/fetch";
import view from "./modules/setValues";


const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchBtn.addEventListener("click", async () => {
  if (searchInput.value === "") return;
  const weatherData = await weather.getData(searchInput.value);
  view.setSearchResult(weatherData);
});



function collatz(n) {
  if (n == 1) {
    return 0;
  }
    else if (n % 2 == 0) {
      return 1 + collatz(n / 2);
    }
    else {
      return 1 + collatz(3*n + 1)

    }
}