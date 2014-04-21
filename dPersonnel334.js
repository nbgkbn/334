var ErrorList = [];
var dPersonnelV3XMLArray = [];
var setdPersonnel = function(businessObject)
{
//console.log(businessObject);
console.log(businessObject.sections[0]);
//console.log(businessObject.sections[1].attributes.name);
   		dPersonnelV3XMLArray.push("<dPersonnel.PersonnelGroup>") 
		dPersonnelV3XMLArray.push("<dPersonnel.PersonnelNameGroup>") 

		if(getdPersonnelValue(businessObject.elements,"dPersonnel.01") == null){
			ErrorList.push("dPersonnel.01 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.01>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.01") + "</dPersonnel.01>") 
		};
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.02") ==null){
			ErrorList.unshift("dPersonnel.02 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.02>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.02") + "</dPersonnel.02>")
			D01_01 = value;
		};
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.03") ==null){
			if(isRequiredStateElement("dPersonnel.03") == true){
				ErrorList.push("dPersonnel.03 required");
			}
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.03>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.03") + "</dPersonnel.03>")
			D01_03 = value;
		};
		dPersonnelV3XMLArray.push("</dPersonnel.PersonnelNameGroup>") 
		dPersonnelV3XMLArray.push("<dPersonnel.PersonnelAddressGroup>") 

		if(getdPersonnelValue(businessObject.elements,"dPersonnel.04") ==null){
			ErrorList.unshift("dPersonnel.04 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.04>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.04") + "</dPersonnel.04>")
		};
		   		if(getdPersonnelValue(businessObject.elements,"dPersonnel.05") == null){
			ErrorList.push("dPersonnel.05 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.05>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.05") + "</dPersonnel.05>") 
		};
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.06") ==null){
			ErrorList.unshift("dPersonnel.06 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.06>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.06") + "</dPersonnel.06>")
			D01_04 = value;
		};
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.07") ==null){
			ErrorList.unshift("dPersonnel.07 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.07>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.07") + "</dPersonnel.07>")
		};
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.08") ==null){
			ErrorList.unshift("dPersonnel.08 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.08>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.08") + "</dPersonnel.08>")
		};   
		dPersonnelV3XMLArray.push("</dPersonnel.PersonnelAddressGroup>") 

		if(getdPersonnelValue(businessObject.elements,"dPersonnel.09") ==null){
			ErrorList.unshift("dPersonnel.09 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.09>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.09") + "</dPersonnel.09>")
			D01_05 = value;
		};
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.10") ==null){
			if(isRequiredStateElement("dPersonnel.10") == true){
				ErrorList.push("dPersonnel.10 required");
			}
			else{
				dPersonnelV3XMLArray.push("<dPersonnel.10>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.10") + "</dPersonnel.10>")
			}
		}
		else{
			D01_06 = value;
			dPersonnelV3XMLArray.push("<dPersonnel.10>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.10") + "</dPersonnel.10>")
		};
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.11") ==null){
			ErrorList.unshift("dPersonnel.11 National Element");
		}
		else{
			D01_07 = value;
			dPersonnelV3XMLArray.push("<dPersonnel.11>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.11") + "</dPersonnel.11>")
		};
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.12") ==null){
			ErrorList.unshift("dPersonnel.12 National Element");	
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.12>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.12") + "</dPersonnel.12>")
			D01_09 = value;
		};
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.13") ==null){
			ErrorList.unshift("dPersonnel.13 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.13>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.13") + "</dPersonnel.13>")
			D01_08 = value;
		};
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.14") ==null){
			ErrorList.unshift("dPersonnel.14 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.14>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.14") + "</dPersonnel.14>")
		};
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.15") == null){
			ErrorList.push("dPersonnel.15 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.15>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.15") + "</dPersonnel.15>") 
			D01_10 = value;
		};
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.16") ==null){
			ErrorList.unshift("dPersonnel.16 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.16>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.16") + "</dPersonnel.16>")
			D01_12 = value;
		};
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.17") ==null){
			ErrorList.unshift("dPersonnel.17 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.17>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.17") + "</dPersonnel.17>")
			D01_13 = value;

		};
		
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.20") ==null){
			ErrorList.unshift("dPersonnel.20 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.20>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.20") + "</dPersonnel.20>");
			D01_16 = value;

		};  
		
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.21") ==null){
			ErrorList.unshift("dPersonnel.21 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.21>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.21") + "</dPersonnel.21>")

		};
		
		
		
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.28") ==null){
			dPersonnelV3XMLArray.push("<dPersonnel.28>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.28") + "</dPersonnel.28>")
			
		};
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.29") ==null){
			dPersonnelV3XMLArray.push("<dPersonnel.29>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.29") + "</dPersonnel.29>")
		};
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.30") ==null){
			ErrorList.unshift("dPersonnel.30 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.30>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.30") + "</dPersonnel.30>")
		};
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.31") ==null){
			ErrorList.unshift("dPersonnel.31 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.31>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.31") + "</dPersonnel.31>")
		};
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.32") ==null){
			dPersonnelV3XMLArray.push("<dPersonnel.32>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.32") + "</dPersonnel.32>")
		};
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.33") ==null){
			ErrorList.unshift("dPersonnel.33 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.33>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.33") + "</dPersonnel.33>")
		};
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.34") ==null){
			ErrorList.unshift("dPersonnel.34 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.34>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.34") + "</dPersonnel.34>")
		};	
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.35") ==null){
			ErrorList.unshift("dPersonnel.35 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.35>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.35") + "</dPersonnel.35>")
		};
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.36") ==null){
			ErrorList.unshift("dPersonnel.36 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.36>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.36") + "</dPersonnel.36>")
		};	
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.37") ==null){
			ErrorList.unshift("dPersonnel.37 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.37>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.37") + "</dPersonnel.37>")
		};			
				
		
		if(businessObject.sections[0].attributes.name == "dPersonnel.PersonnelServiceGroup"){
			setPersonnelServiceGroup(businessObject.sections[0].attributes);
			//console.log(businessObject.sections[0].attributes.name);
		}
		else{
			setPersonnelServiceGroup(businessObject.sections[1].attributes.name);
		};
		if(businessObject.sections[0].attributes.name == "dPersonnel.PersonnelYearGroup"){
			setPersonnelYearGroup(businessObject.sections[0].attributes);
			//console.log(businessObject.sections[0].attributes.name);

		}
		else{
			setPersonnelYearGroup (businessObject.sections[1].attributes.name);
		};		
		//console.log(dPersonnelV3XMLArray);
};

var setPersonneLicensureGroupC = function(groupObject)
{
	for(var i=0;i<groupObject.length; i++) 
   	{	
   		dPersonnelV3XMLArray.push("<dPersonnel.LicensureGroupC>") 
   		

		if(getdPersonnelValue(businessObject.elements,"dPersonnel.22") ==null){
			ErrorList.unshift("dPersonnel.22 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.22>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.22") + "</dPersonnel.22>");
		};  
		
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.23") ==null){
			ErrorList.unshift("dPersonnel.23 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.23>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.23") + "</dPersonnel.23>")
		};

		if(getdPersonnelValue(businessObject.elements,"dPersonnel.24") ==null){
			if(isRequiredStateElement("dPersonnel.24") == true){
				ErrorList.push("dPersonnel.24 required");
			}
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.24>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.24") + "</dPersonnel.24>");
		};  
				
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.25") ==null){
			if(isRequiredStateElement("dPersonnel.25") == true){
				ErrorList.push("dPersonnel.25 required");
			}
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.25>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.25") + "</dPersonnel.25>");
		};  
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.26") ==null){
			if(isRequiredStateElement("dPersonnel.26") == true){
				ErrorList.push("dPersonnel.26 required");
			}
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.26>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.26") + "</dPersonnel.26>");
		}; 
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.27") ==null){
			if(isRequiredStateElement("dPersonnel.27") == true){
				ErrorList.push("dPersonnel.26 required");
			}
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.27>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.27") + "</dPersonnel.27>");
		};  		 	
   		dPersonnelV3XMLArray.push("</dPersonnel.LicensureGroupC>") 
	}
}

var setPersonnelCertificationLevelGroupC = function(groupObject)
{//console.log("setPersonnelYearGroup");
	for(var i=0;i<groupObject.length; i++) 
   	{	
   		dPersonnelV3XMLArray.push("<dPersonnel.CertificationLevelGroupC>") 
   		
   		if(getdPersonnelValue(businessObject.elements,"dPersonnel.38") == null){
			ErrorList.push("dPersonnel.38 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.38>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.38") + "</dPersonnel.38>") 
		};
		if(getdPersonnelValue(businessObject.elements,"dPersonnel.39") ==null){
			ErrorList.unshift("dPersonnel.39 National Element");
		}
		else{
			dPersonnelV3XMLArray.push("<dPersonnel.39>"+ getdPersonnelValue(businessObject.elements,"dPersonnel.39") + "</dPersonnel.39>")
			D01_04 = value;
		};
			
   		dPersonnelV3XMLArray.push("</dPersonnel.CertificationLevelGroupC>") 
	}
}


var isRequiredStateElement = function(elementID)
{
	return true;
};
var getdPersonnelValue = function(businessObject, valueObject)
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