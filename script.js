document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    var query = document.querySelector("#query").value;
    var url = "https://api.duckduckgo.com/?q=" + query + "&format=json";
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var results = document.querySelector("#results");
        results.innerHTML = "";
        var answer = data.AbstractText;
        if (answer) {
          var p = document.createElement("p");
          p.innerHTML = answer;
          results.appendChild(p);
        } else {
          var p = document.createElement("p");
          p.innerHTML = "No instant answer found.";
          results.appendChild(p);
        }
      });
  });
  