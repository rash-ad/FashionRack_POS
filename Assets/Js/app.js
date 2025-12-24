fetch("https://www.omdbapi.com/?i=tt3896198&apikey=aef35bd9")
.then((response) => response.json())
.then((data) => {
        console.log(data);
        var movieTitle = data.Title;
        var movieYear = data.Year;
        var moviePoster = data.Poster;
    });
    