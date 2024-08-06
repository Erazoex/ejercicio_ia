// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state){
   	if (state=="DIRTY") return "CLEAN";
   	else if (location=="A") return "RIGHT";
   	else if (location=="B") return "LEFT";
}

function test(states){
      	var location = states[0];		
      	var state = states[0] == "A" ? states[1] : states[2];
      	var action_result = reflex_agent(location, state);
      	document.getElementById("log").innerHTML+="<br>ESTADO: ".concat(location).concat(" | ").concat(states[1]).concat(" | ").concat(states[2]).concat(" | ACTION: ").concat(action_result);
      	if (action_result == "CLEAN"){
            if ((states[1] == "CLEAN" && states[2] == "CLEAN" && states[0] == "B")){
                console.log("entra aqui");
                test(["B", "DIRTY", "DIRTY"]);
                return;
            } 
            else if ((states[1] == "CLEAN" && states[2] == "CLEAN" && states[0] == "A")) return;
        	else if (location == "A") states[1] = "CLEAN";
         	else if (location == "B") states[2] = "CLEAN";
      	}
      	else if (action_result == "RIGHT") states[0] = "B";
      	else if (action_result == "LEFT") states[0] = "A";
	setTimeout(function(){ test(states); }, 2000);
}

var states = ["A","DIRTY","DIRTY"];
test(states);