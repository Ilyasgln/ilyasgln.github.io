
"match_results":[
  {"date":"24.01.22", "matchup":"Fc Bayern vs Fc Köln", "result":"4:0"}, 
  {"date":"24.01.22", "matchup":"Fc Bayern vs Fc Köln", "result":"4:0"}, 
  {"date":"24.01.22", "matchup":"Fc Bayern vs Fc Köln", "result":"4:0"},
  {"date":"24.01.22", "matchup":"Fc Bayern vs Fc Köln", "result":"4:0"}, 
  {"date":"24.01.22", "matchup":"Fc Bayern vs Fc Köln", "result":"4:0"}, 
  {"date":"24.01.22", "matchup":"Fc Bayern vs Fc Köln", "result":"4:0"},
  {"date":"24.01.22", "matchup":"Fc Bayern vs Fc Köln", "result":"4:0"}, 
  {"date":"24.01.22", "matchup":"Fc Bayern vs Fc Köln", "result":"4:0"}, 

]


  

function kreiere() {
    let example_date = match_results[0].date;
    let example_matchup = "FC Bayern vs FC Köln";
    let example_result = "4:0"
    
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
