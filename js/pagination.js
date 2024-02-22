let showMoreButton = document.querySelector(".show-more-btn");

function showMorecountries() {}


dropDownHeader.addEventListener("click", controlDropDown);
searchInput.addEventListener("paste", getCountriesBySearch);
searchInput.addEventListener("keyup", getCountriesBySearch);
showMoreButton.addEventListener("click", () => {
  showMoreButton.textContent = "loading countries...";
  getCountries(all, (limit = 250), (getRest = true));
  setTimeout(() => {
    showMoreButton.style.display = "none";
    showMoreButton.textContent = "show more";
  }, 2000);
});
