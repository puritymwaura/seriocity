/**
 * Unique API Key for TMDB Endpoints requests
 */
 const API_KEY = '9dfd01779b6fdeb1cde19f1c010bb6a9';
 /**
  * TMDB TV Series Endpoints URLs
  */
 const APIURL = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`;
 const IMGPATH = "https://image.tmdb.org/t/p/w1280";
 const SEARCHAPI =
 `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=`;
 const main = document.getElementById("content");
const form = document.getElementById("form");
const search = document.getElementById("search");
// initially get fav series
getSeries(APIURL);
async function getSeries(url) {
    const resp = await fetch(url);
    const respData = await resp.json();
    console.log(respData);
    showSeries(respData.results);
}