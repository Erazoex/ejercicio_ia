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
        console.log("ESTADO");
        console.log(state);
      	var action_result = reflex_agent(location, state);
      	document.getElementById("log").innerHTML+="<br>ESTADO: ".concat(location).concat(" | ").concat(states[1]).concat(" | ").concat(states[2]).concat(" | ACTION: ").concat(action_result);
      	if (action_result == "CLEAN"){
        	if (location == "A"){
                states[1] = "CLEAN";
                console.log("limpiando estado 1")
                console.log(state[1]);
            } 
         	else if (location == "B") {
                states[2] = "CLEAN"
                console.log("limpiando estado 2")
                console.log(state[2]);
            };
      	}
        else if (action_result == "RIGHT" && states[1] == "CLEAN" && states[2] == "CLEAN" && location == "A"){
            return test(["B", "DIRTY", "DIRTY"]);
        } 
        else if ((action_result == "LEFT" && states[1] == "CLEAN" && states[2] == "CLEAN" && location == "B")) return;
      	else if (action_result == "RIGHT") states[0] = "B";
      	else if (action_result == "LEFT") states[0] = "A";
	setTimeout(function(){ test(states); }, 2000);
}

var states = ["A","DIRTY","DIRTY"];
test(states);