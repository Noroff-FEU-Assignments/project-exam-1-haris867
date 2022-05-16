export function getAddedFavourites() {
  const favourites = localStorage.getItem("favourites");

  if (favourites === null) {
    return [];
  } else {
    return JSON.parse(favourites);
  }
}
