function getResult(){
	$("#display").html('')
	document.getElementById('display').className = 'animated bounceInDown'
	var search = document.getElementById('find').value
	var key = 'R0sTGtUvlXUc0f6fGu8yLA5ooV3tG4nXQmOj2ujR'
	console.log(search)

	


$.ajax({
    
	   	url: "https://api.fda.gov/drug/event.json?api_key="+ key + "&search=" + search + "&count=patient.reaction.reactionmeddrapt.exact",
	   	dataType: "json",
	   	success: function(data) {
	   		for(i=0;i<13;i++){
	    		var results = (data.results[i].term)
          if(data.results[i].term === "DRUG INEFFECTIVE"){
            results[i].term = ""
          }else if(data.results[i].term === ""){
            document.write("Try another search") 
          }else{
            		$("#display").append(results + " " + "<br>")
				console.log(data.results[i].term)
          }
	    
			}
	   	},
	   type: 'GET'
	});
}

document.getElementById('getInfo').addEventListener('click', getResult, false)
