var ErrorList = [];
var dLocationV3XMLArray = [];
var setdLocation = function(businessObject)
{

	//console.log(businessObject);
	console.log(businessObject.sections[0]);
	//console.log(businessObject.sections[1].attributes.name);
	for(var i=0;i<businessObject.sections.length; i++) 
  	{	
		dLocationV3XMLArray.push("<dLocation.LocationGroup>");
	
		if(getdLocationValue(businessObject.elements,"dLocation.01") == null){
			ErrorList.push("dLocation.01 National Element");
		}
		else{
			dLocationV3XMLArray.push("<dLocation.01>"+ getdLocationValue(businessObject.elements,"dLocation.01") + "</dLocation.01>") 
		};
		if(getdLocationValue(businessObject.elements,"dLocation.02") ==null){
			ErrorList.unshift("dLocation.02 National Element");
		}
		else{
			dLocationV3XMLArray.push("<dLocation.02>"+ getdLocationValue(businessObject.elements,"dLocation.02") + "</dLocation.02>")
			D01_01 = value;
		};
		if(getdLocationValue(businessObject.elements,"dLocation.03") ==null){
			if(isRequiredStateElement("dLocation.03") == true){
				ErrorList.push("dLocation.03 required");
			}
		}
		else{
			dLocationV3XMLArray.push("<dLocation.03>"+ getdLocationValue(businessObject.elements,"dLocation.03") + "</dLocation.03>")
			D01_03 = value;
		};
		if(getdLocationValue(businessObject.elements,"dLocation.04") ==null){
			ErrorList.unshift("dLocation.04 National Element");
		}
		else{
			dLocationV3XMLArray.push("<dLocation.04>"+ getdLocationValue(businessObject.elements,"dLocation.04") + "</dLocation.04>")
		};
		
				if(getdLocationValue(businessObject.elements,"dLocation.05") == null){
			ErrorList.push("dLocation.05 National Element");
		}
		else{
			dLocationV3XMLArray.push("<dLocation.05>"+ getdLocationValue(businessObject.elements,"dLocation.05") + "</dLocation.05>") 
		};
		if(getdLocationValue(businessObject.elements,"dLocation.06") ==null){
			ErrorList.unshift("dLocation.06 National Element");
		}
		else{
			dLocationV3XMLArray.push("<dLocation.06>"+ getdLocationValue(businessObject.elements,"dLocation.06") + "</dLocation.06>")
			D01_04 = value;
		};
		if(getdLocationValue(businessObject.elements,"dLocation.07") ==null){
			ErrorList.unshift("dLocation.07 National Element");
		}
		else{
			dLocationV3XMLArray.push("<dLocation.07>"+ getdLocationValue(businessObject.elements,"dLocation.07") + "</dLocation.07>")
		};
		if(getdLocationValue(businessObject.elements,"dLocation.08") ==null){
			ErrorList.unshift("dLocation.08 National Element");
		}
		else{
			dLocationV3XMLArray.push("<dLocation.08>"+ getdLocationValue(businessObject.elements,"dLocation.08") + "</dLocation.08>")
		};   	
		
		if(getdLocationValue(businessObject.elements,"dLocation.09") ==null){
			ErrorList.unshift("dLocation.09 National Element");
		}
		else{
			dLocationV3XMLArray.push("<dLocation.09>"+ getdLocationValue(businessObject.elements,"dLocation.09") + "</dLocation.09>")
			D01_05 = value;
		};
		if(getdLocationValue(businessObject.elements,"dLocation.10") ==null){
			if(isRequiredStateElement("dLocation.10") == true){
				ErrorList.push("dLocation.10 required");
			}
			else{
				dLocationV3XMLArray.push("<dLocation.10>"+ getdLocationValue(businessObject.elements,"dLocation.10") + "</dLocation.10>")
			}
		}
		else{
			D01_06 = value;
			dLocationV3XMLArray.push("<dLocation.10>"+ getdLocationValue(businessObject.elements,"dLocation.10") + "</dLocation.10>")
		};
		if(getdLocationValue(businessObject.elements,"dLocation.11") ==null){
			ErrorList.unshift("dLocation.11 National Element");
		}
		else{
			D01_07 = value;
			dLocationV3XMLArray.push("<dLocation.11>"+ getdLocationValue(businessObject.elements,"dLocation.11") + "</dLocation.11>")
		};
		if(getdLocationValue(businessObject.elements,"dLocation.12") ==null){
			ErrorList.unshift("dLocation.12 National Element");	
		}
		else{
			dLocationV3XMLArray.push("<dLocation.12>"+ getdLocationValue(businessObject.elements,"dLocation.12") + "</dLocation.12>")
			D01_09 = value;
		};
	
		dLocationV3XMLArray.push("</dLocation.LocationGroup>")
	
	}
};


var isRequiredStateElement = function(elementID)
{
	return true;
};
var getdLocationValue = function(businessObject, valueObject)
{
		//console.log(businessObject);
		//console.log("\"" + valueObject + "\"");
		var bFound = false;
		i=0;
		while (i<26)
		{
				//console.log(businessObject[i].attributes.title);
			if(bFound == false)
			{
				//if(businessObject[i].attributes.title == "\"" + valueObject + "\"")
				if(businessObject[i].attributes.title ==  valueObject)
				{
					//console.log("true");
					bFound = true;
					return businessObject[i].attributes.value;
					i++;
				}
			}
		return null;
	}
}