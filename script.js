
let text = ' { "match_results":[ ' +
  '{"date":"24.01.22", "matchup":"Fc Bayern vs Fc Köln", "result":"4:0"},' +
  '{"date":"24.01.22", "matchup":"Fc Bayern vs Fc Köln", "result":"4:0"}, ' + 
  '{"date":"24.01.22", "matchup":"Fc Bayern vs Fc Köln", "result":"4:0"}, ' +
  '{"date":"24.01.22", "matchup":"Fc Bayern vs Fc Köln", "result":"4:0"}, ' +
  '{"date":"24.01.22", "matchup":"Fc Bayern vs Fc Köln", "result":"4:0"}, ' +
  '{"date":"24.01.22", "matchup":"Fc Bayern vs Fc Köln", "result":"4:0"}, ' +
  '{"date":"24.01.22", "matchup":"Fc Bayern vs Fc Köln", "result":"4:0"}, ' +
  '{"date":"24.01.22", "matchup":"Fc Bayern vs Fc Köln", "result":"4:0"} ]}';


const resultJSON = JSON.parse(text);  

function kreiere() {
  getjson();
  for(let i = 0; i < resultJSON.match_results.length; i++){
      let example_date = resultJSON.match_results[i].date;
      let example_matchup = resultJSON.match_results[i].matchup;
      let example_result = resultJSON.match_results[i].result;
    
      const match = document.createElement("p");
      match.id = "match";
      document.getElementById("table").appendChild(match);

      const match_element = document.getElementById("match");

      const date = document.createElement("span");
      date.innerText = example_date + " ";
      match_element.appendChild(date); 


      const matchup = document.createElement("span");
      matchup.innerText = example_matchup + " ";
      match_element.appendChild(matchup);

      const result = document.createElement("span");
      result.innerText = example_result;
      match_element.appendChild(result);

      const br = document.createElement("br");
      match_element.appendChild(br);
    }

  }

function getjson() {
text = fetch('http://ip172-18-0-8-c7p8kp5mrepg00c9hgpg-9080.direct.labs.play-with-docker.com/system/properties-new')
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error)};
  
}
  
