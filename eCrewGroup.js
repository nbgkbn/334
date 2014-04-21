 var eCrewGroup = , {[
    	{"eCrew.01" : null},
    	{"eCrew.02" : null},
    	{"eCrew.03" : null},
    	
  	]},
  	
  	
function AddeCrewGroup(PCRId, CrewGroupObject)
{
	console.log(CrewGroupObject.length);
	var CrewGroupObject = Parse.Object.extend("CrewGroupObject");
	for(var i=0;i<CrewGroupObject.length; i++) 
	{
	 	console.log(CrewGroupObject[i]["CrewGroupObject.01"]);
		var CrewGroupObject = Parse.Object.extend("CrewGroupObject");
 
		// Create the post
		var thePCR = new PCR();
		thePCR.set("objectId", PCRId);
 
		// Create the object
		var theCrewGroupObject = new CrewGroupObject();
		theCrewGroupObject.set("eCrew01", CrewGroupObject[i]["eCrew.01"]);
		theCrewGroupObject.set("eCrew02", CrewGroupObject[i]["eCrew.02"]);
		theCrewGroupObject.set("eCrew03", CrewGroupObject[i]["eCrew.03"]);
		
		// Add the post as a value in the comment
		theCrewGroupObject.set("parent", thePCR;
	 
		// This will save both myPost and myComment
		theCrewGroupObject.save();
	}
}


