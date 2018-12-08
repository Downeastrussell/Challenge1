var movieObject = {
    title: "Star Wars: A New Hope",
    genre: "Science Fiction",
    releaseDate: "May 25, 1977"
  }


  
  var htmlString = `
      <h1 id="title">${movieObject.title}</h1>
      <h2 id="genre">${movieObject.genre}</h2>
      <h3 id="releaseDate">${movieObject.releaseDate}</h3>
  
  `

  document.querySelector("#movie-poster").innerHTML = htmlString;
  
  