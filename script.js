//const resultJSON = JSON.parse(text);  

function addSum(a,b) {
  return a + b
}

function kreiere(data) {
  
  for(let i = 0; i < data.length; i++){
      let title = data[i].title;
      let desc = data[i].description;
      let image = data[i].image;
    
      const match = document.createElement("p");
      match.id = "match";
      document.getElementById("table").appendChild(match);

      const match_element = document.getElementById("match");

      const date = document.createElement("span");
      date.innerText = example_date + " ";
      match_element.appendChild(title); 

      const matchup = document.createElement("span");
      matchup.innerText = example_matchup + " ";
      match_element.appendChild(desc);

      const result = document.createElement("span");
      result.src = example_result;
      match_element.appendChild(image);

      const br = document.createElement("br");
      match_element.appendChild(br);
    }

  }

function getjson() {
  //fetch('https://ghibliapi.herokuapp.com/films')
   fetch('http://ip172-18-0-43-c7pusgtmrepg00fnq1s0-9080.direct.labs.play-with-docker.com/system/properties-new')
  .then(response => response.json())
  //.then(data => kreiere(data))
  .then(data => console.log(data))
  .catch(error => 
     {console.error('There has been a problem with your fetch operation:', error)
     }
  );
}
  
