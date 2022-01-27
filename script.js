//const resultJSON = JSON.parse(text);  

function addSum(a,b) {
  return a + b
}

function kreiere(data) {
  
  
  for(let i = 0; i < data.length; i++){
      let example_date = data[i].title;
      let example_matchup = data[i].description;
      let example_result = data[i].image;
    
      const match = document.createElement("p");
      match.id = "match";
      document.getElementById("table").appendChild(match);

      const match_element = document.getElementById("match");

      const date = document.createElement("div");
      date.innerText = example_date + " ";
      match_element.appendChild(date); 


      const matchup = document.createElement("div");
      matchup.innerText = example_matchup + " ";
      match_element.appendChild(matchup);

      const result = document.createElement("div");
      result.innerText = example_result;
      match_element.appendChild(result);

      const br = document.createElement("br");
      match_element.appendChild(br);
    }

  }

function getjson() {
  fetch('https://ghibliapi.herokuapp.com/films')
  //text = fetch('http://ip172-18-0-8-c7p8kp5mrepg00c9hgpg-9080.direct.labs.play-with-docker.com/system/properties-new')
  .then(response => response.json())
  .then(data => kreiere(data))
  .catch(error => 
     {console.error('There has been a problem with your fetch operation:', error)
     }
  );
}
  
