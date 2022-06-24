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
function showSeries(series) {
    // clear main
    main.innerHTML = "";
    series.forEach((series) => {
        const { poster_path, original_name, vote_average, overview } = series;
        // console.log(original_name);
        // console.log(overview);
        console.log(poster_path)
        
        const seriesEl = document.createElement("div");
        seriesEl.classList.add("series");
        seriesEl.innerHTML = `
            <img
                src="${IMGPATH + poster_path}"
                alt="${original_name}"
            />
            <div class="series-info">
                <h3>${original_name}</h3>
                <span class="${getClassByRate(
                    vote_average
                )}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview:</h3>
                ${overview}
            </div>
        `;
        main.appendChild(seriesEl);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm) {
        getSeries(SEARCHAPI + searchTerm);
        search.value = "";
    }
});