# seriocity
### by purity wanjiku mwaura


This project is aimed at the intention of creating a website where one can search for their favourite series and check their reviews without having to navigate through different sites to get the information you want. It is also aimed at minimising potential risks like viruses that come with different sites and curbing piracy.its easy and very precise.
in this particular project, i used two API's which i intergrated them together for them to work.

#how it works

I used this API KEY https://api.themoviedb.org/3/search/tv?api_key to search for the correct data while the second API was to retrieve  the specific  data https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}.

The project also includes a search bar where you can search for your favourite series which makes it eseries easier and faster to look for what your looking for.
i used html for linking the css file and java script so that they work harmoniously together.Here is the code used ;


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

