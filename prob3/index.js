document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const movieInput = document.getElementById('movieInput').value;
  
    
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movieInput)}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayMovieData(data);
      })
      .catch(error => {
        console.error('Error fetching movie data:', error);
      });
  });
  
  function displayMovieData(data) {
    const movieDataDiv = document.getElementById('movieData');
    movieDataDiv.innerHTML = '';
  
    if (data.Error) {
      movieDataDiv.innerHTML = `<p>${data.Error}</p>`;
    } else {
      const keys = Object.keys(data);
      keys.forEach(key => {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${key}:</strong> ${data[key]}`;
        movieDataDiv.appendChild(p);
      });
    }
  }
  