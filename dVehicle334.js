var ErrorList = [];
var dVehicleV3XMLArray = [];
var setdVehicle = function(businessObject)
{
//console.log(businessObject);
console.log(businessObject.sections[0]);
//console.log(businessObject.sections[1].attributes.name);
   		dVehicleV3XMLArray.push("<dVehicle.VehicleGroup>") 

		if(getdVehicleValue(businessObject.elements,"dVehicle.01") == null){
			ErrorList.push("dVehicle.01 National Element");
		}
		else{
			dVehicleV3XMLArray.push("<dVehicle.01>"+ getdVehicleValue(businessObject.elements,"dVehicle.01") + "</dVehicle.01>") 
		};
		if(getdVehicleValue(businessObject.elements,"dVehicle.02") ==null){
			ErrorList.unshift("dVehicle.02 National Element");
		}
		else{
			dVehicleV3XMLArray.push("<dVehicle.02>"+ getdVehicleValue(businessObject.elements,"dVehicle.02") + "</dVehicle.02>")
			D01_01 = value;
		};
		if(getdVehicleValue(businessObject.elements,"dVehicle.03") ==null){
			if(isRequiredStateElement("dVehicle.03") == true){
				ErrorList.push("dVehicle.03 required");
			}
		}
		else{
			dVehicleV3XMLArray.push("<dVehicle.03>"+ getdVehicleValue(businessObject.elements,"dVehicle.03") + "</dVehicle.03>")
			D01_03 = value;
		};


		if(getdVehicleValue(businessObject.elements,"dVehicle.04") ==null){
			ErrorList.unshift("dVehicle.04 National Element");
		}
		else{
			dVehicleV3XMLArray.push("<dVehicle.04>"+ getdVehicleValue(businessObject.elements,"dVehicle.04") + "</dVehicle.04>")
		};
  		
		dVehicleV3XMLArray.push("</dVehicle.VehicleAddressGroup>") 

		if(getdVehicleValue(businessObject.elements,"dVehicle.09") ==null){
			ErrorList.unshift("dVehicle.09 National Element");
		}
		else{
			dVehicleV3XMLArray.push("<dVehicle.09>"+ getdVehicleValue(businessObject.elements,"dVehicle.09") + "</dVehicle.09>")
			D01_05 = value;
		};
		if(getdVehicleValue(businessObject.elements,"dVehicle.10") ==null){
			if(isRequiredStateElement("dVehicle.10") == true){
				ErrorList.push("dVehicle.10 required");
			}
			else{
				dVehicleV3XMLArray.push("<dVehicle.10>"+ getdVehicleValue(businessObject.elements,"dVehicle.10") + "</dVehicle.10>")
			}
		}
		else{
			D01_06 = value;
			dVehicleV3XMLArray.push("<dVehicle.10>"+ getdVehicleValue(businessObject.elements,"dVehicle.10") + "</dVehicle.10>")
		};
	
		
		if(businessObject.sections[0].attributes.name == "dVehicle.VehicleServiceGroup"){
			setVehicleServiceGroup(businessObject.sections[0].attributes);
			//console.log(businessObject.sections[0].attributes.name);
		}
		else{
			setVehicleServiceGroup(businessObject.sections[1].attributes.name);
		};
		if(businessObject.sections[0].attributes.name == "dVehicle.VehicleYearGroup"){
			setVehicleYearGroup(businessObject.sections[0].attributes);
			//console.log(businessObject.sections[0].attributes.name);

		}
		else{
			setVehicleYearGroup (businessObject.sections[1].attributes.name);
		};		
		//console.log(dVehicleV3XMLArray);
};

var setVehicleicensureGroupC = function(groupObject)
{
	for(var i=0;i<groupObject.length; i++) 
   	{	
   		dVehicleV3XMLArray.push("<dVehicle.VehicleCertificationLevelsGroup>") 
   	if(getdVehicleValue(businessObject.elements,"dVehicle.05") == null){
			ErrorList.push("dVehicle.05 National Element");
		}
		else{
			dVehicleV3XMLArray.push("<dVehicle.05>"+ getdVehicleValue(businessObject.elements,"dVehicle.05") + "</dVehicle.05>") 
		};
		if(getdVehicleValue(businessObject.elements,"dVehicle.06") ==null){
			ErrorList.unshift("dVehicle.06 National Element");
		}
		else{
			dVehicleV3XMLArray.push("<dVehicle.06>"+ getdVehicleValue(businessObject.elements,"dVehicle.06") + "</dVehicle.06>")
			D01_04 = value;
		};
		if(getdVehicleValue(businessObject.elements,"dVehicle.07") ==null){
			ErrorList.unshift("dVehicle.07 National Element");
		}
		else{
			dVehicleV3XMLArray.push("<dVehicle.07>"+ getdVehicleValue(businessObject.elements,"dVehicle.07") + "</dVehicle.07>")
		};
		if(getdVehicleValue(businessObject.elements,"dVehicle.08") ==null){
			ErrorList.unshift("dVehicle.08 National Element");
		}
		else{
			dVehicleV3XMLArray.push("<dVehicle.08>"+ getdVehicleValue(businessObject.elements,"dVehicle.08") + "</dVehicle.08>")
		};   
		
   		dVehicleV3XMLArray.push("</dVehicle.VehicleCertificationLevelsGroup>") 
	}
}

var setVehicleCertificationLevelGroupC = function(groupObject)
{//console.log("setVehicleYearGroup");
	for(var i=0;i<groupObject.length; i++) 
   	{	
   		dVehicleV3XMLArray.push("<dVehicle.YearGroupC>") 
   		if(getdVehicleValue(businessObject.elements,"dVehicle.11") ==null){
			ErrorList.unshift("dVehicle.11 National Element");
		}
		else{
			D01_07 = value;
			dVehicleV3XMLArray.push("<dVehicle.11>"+ getdVehicleValue(businessObject.elements,"dVehicle.11") + "</dVehicle.11>")
		};
		if(getdVehicleValue(businessObject.elements,"dVehicle.12") ==null){
			ErrorList.unshift("dVehicle.12 National Element");	
		}
		else{
			dVehicleV3XMLArray.push("<dVehicle.12>"+ getdVehicleValue(businessObject.elements,"dVehicle.12") + "</dVehicle.12>")
			D01_09 = value;
		};
		if(getdVehicleValue(businessObject.elements,"dVehicle.13") ==null){
			ErrorList.unshift("dVehicle.13 National Element");
		}
		else{
			dVehicleV3XMLArray.push("<dVehicle.13>"+ getdVehicleValue(businessObject.elements,"dVehicle.13") + "</dVehicle.13>")
			D01_08 = value;
		};
		
			
			
   		dVehicleV3XMLArray.push("</dVehicle.YearGroupC>") 
	}
}


var isRequiredStateElement = function(elementID)
{
	return true;
};
var getdVehicleValue = function(businessObject, valueObject)
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