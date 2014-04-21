var ErrorList = [];
var dConfigurationV3XMLArray = [];
var v3NOT_REPORTING = "7701005";
var v3NOT_RECORDED = "7701003";
var v3NOT_AVAILABLE = "-5"
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";

var setdConfiguration = function(businessObject)
{
var dConfiguration = new Object();
dConfiguration["dAgency.03"]  = true;
return dConfiguration; 

	var Configuration = Parse.Object.extend("Section");

	var count = function(object){
    var query = new Parse.Query(PCR);
    var promise = query.count({
        success: function(count){
            return count;
        },
        error: function(error){
            console.log(error);
        }
    });
    return promise;
    */
};

var getdConfiguration = function(businessObject)
{
	var _dConfigurationMedicationGroupFound = false;
	var _bdConfigurationMedicationGroupFound = false;

	//console.log(businessObject);
	console.log(businessObject.sections[0]);
	//console.log(businessObject.sections[1].attributes.name);
	for(var i=0;i<businessObject.sections.length; i++) 
  	{	

		if(getdConfigurationValue(businessObject.elements,"dConfiguration.06") == null){
			ErrorList.push("dConfiguration.01 National Element");
			dConfigurationV3XMLArray.push("<dConfiguration.01>"+ "dConfiguration.01 Null Error" + "</dConfiguration.01>") ;
		}
		else{
			dConfigurationV3XMLArray.push("<dConfiguration.01>"+ getdConfigurationValue(businessObject.elements,"dConfiguration.01") + "</dConfiguration.01>") 
		};
		if(getdConfigurationValue(businessObject.elements,"dConfiguration.02") ==null){
			ErrorList.unshift("dConfiguration.02 National Element");
			dConfigurationV3XMLArray.push("<dConfiguration.02>"+ "dConfiguration.02 Null Error" + "</dConfiguration.02>") ;

		}
		else{
			dConfigurationV3XMLArray.push("<dConfiguration.02>"+ getdConfigurationValue(businessObject.elements,"dConfiguration.02") + "</dConfiguration.02>")
			D01_01 = value;
		};
		if(getdConfigurationValue(businessObject.elements,"dConfiguration.03") ==null){
			if(isRequiredStateElement("dConfiguration.03") == true){
				ErrorList.push("dConfiguration.03 required");
				dConfigurationV3XMLArray.push("<dConfiguration.03>"+ "dConfiguration.03 Null Error" + "</dConfiguration.03>") ;
			}
		}
		else{
			dConfigurationV3XMLArray.push("<dConfiguration.03>"+ getdConfigurationValue(businessObject.elements,"dConfiguration.03") + "</dConfiguration.03>")
			D01_03 = value;
		};
		if(getdConfigurationValue(businessObject.elements,"dConfiguration.04") ==null){
			ErrorList.unshift("dConfiguration.04 National Element");
	dConfigurationV3XMLArray.push("<dConfiguration.02>"+ "dConfiguration.02 Null Error" + "</dConfiguration.02>") ;

		}
		else{
			dConfigurationV3XMLArray.push("<dConfiguration.04>"+ getdConfigurationValue(businessObject.elements,"dConfiguration.04") + "</dConfiguration.04>")
		};
		
		if(getdConfigurationValue(businessObject.elements,"dConfiguration.05") ==null){
			ErrorList.unshift("dConfiguration.05 National Element");
dConfigurationV3XMLArray.push("<dConfiguration.05>"+ "dConfiguration.05 Null Error" + "</dConfiguration.05>") ;

		}
		else{
			dConfigurationV3XMLArray.push("<dConfiguration.05>"+ getdConfigurationValue(businessObject.elements,"dConfiguration.05") + "</dConfiguration.05>")
			
		};
		if(getdConfigurationValue(businessObject.elements,"dConfiguration.10") ==null){
				ErrorList.push("dConfiguration.10 required");
dConfigurationV3XMLArray.push("<dConfiguration.02>"+ "dConfiguration.02 Null Error" + "</dConfiguration.02>") ;

			else{
				dConfigurationV3XMLArray.push("<dConfiguration.10>"+ getdConfigurationValue(businessObject.elements,"dConfiguration.10") + "</dConfiguration.10>")
			}
		}
		else{
			D01_06 = value;
			dConfigurationV3XMLArray.push("<dConfiguration.10>"+ getdConfigurationValue(businessObject.elements,"dConfiguration.10") + "</dConfiguration.10>")
		};
		if(getdConfigurationValue(businessObject.elements,"dConfiguration.11") ==null){
			ErrorList.unshift("dConfiguration.11 National Element");
dConfigurationV3XMLArray.push("<dConfiguration.02>"+ "dConfiguration.02 Null Error" + "</dConfiguration.02>") ;

		}
		else{
			D01_07 = value;
			dConfigurationV3XMLArray.push("<dConfiguration.11>"+ getdConfigurationValue(businessObject.elements,"dConfiguration.11") + "</dConfiguration.11>")
		};
		if(getdConfigurationValue(businessObject.elements,"dConfiguration.12") ==null){
			ErrorList.unshift("dConfiguration.12 National Element");	
dConfigurationV3XMLArray.push("<dConfiguration.02>"+ "dConfiguration.02 Null Error" + "</dConfiguration.02>") ;

		}
		else{
			dConfigurationV3XMLArray.push("<dConfiguration.12>"+ getdConfigurationValue(businessObject.elements,"dConfiguration.12") + "</dConfiguration.12>")
			D01_09 = value;
		};
		if(getdConfigurationValue(businessObject.elements,"dConfiguration.13") ==null){
			ErrorList.unshift("dConfiguration.13 National Element");
dConfigurationV3XMLArray.push("<dConfiguration.02>"+ "dConfiguration.02 Null Error" + "</dConfiguration.02>") ;

		}
		else{
			dConfigurationV3XMLArray.push("<dConfiguration.13>"+ getdConfigurationValue(businessObject.elements,"dConfiguration.13") + "</dConfiguration.13>")
			D01_08 = value;
		};
		if(getdConfigurationValue(businessObject.elements,"dConfiguration.14") ==null)
		{
			if(isRequiredStateElement("dConfiguration.14") == true)
			{
				ErrorList.push("dConfiguration.14 required");
				dAgencyV3XMLArray.push("<dConfiguration.14>"+ v3NOT_RECORDED + "</dConfiguration.14>")
			}
			else
			{
				dAgencyV3XMLArray.push("<dConfiguration.14>"+ v3NOT_REPORTING + "</dConfiguration.14>")
			}
		}
		else{
			dConfigurationV3XMLArray.push("<dConfiguration.14>"+ getdConfigurationValue(businessObject.elements,"dConfiguration.14") + "</dConfiguration.14>")
		};
		if(getdConfigurationValue(businessObject.elements,"dConfiguration.15") ==null){
			dConfigurationV3XMLArray.push("<dConfiguration.15>"+ getdConfigurationValue(businessObject.elements,"dConfiguration.15") + "</dConfiguration.15>")
			D01_19 = value;
		};
		if(getdConfigurationValue(businessObject.elements,"dConfiguration.16") ==null){
			dConfigurationV3XMLArray.push("<dConfiguration.16>"+ getdConfigurationValue(businessObject.elements,"dConfiguration.16") + "</dConfiguration.16>")
			D01_20 = value;
		};
		if(getdConfigurationValue(businessObject.elements,"dConfiguration.17") ==null){
			ErrorList.unshift("dConfiguration.17 National Element");
		dConfigurationV3XMLArray.push("<dConfiguration.017>"+ "dConfiguration.17 Null Error" + "</dConfiguration.17>") ;

		}
		else{
			dConfigurationV3XMLArray.push("<dConfiguration.17>"+ getdConfigurationValue(businessObject.elements,"dConfiguration.17") + "</dConfiguration.17>")
			D01_21 = value;
		};
		
			for(var i=0;i<businessObject.sections.length; i++) 
		{
			//console.log(businessObject.sections[i].attributes);
			if(businessObject.sections[i].attributes.name == "dConfiguration.ProcedureGroup")
			{
				_retArray = setProcedureGroup(businessObject.sections[i].attributes);
				_bdConfigurationMedicationGroupFound = true;
				dAgencyV3XMLArray.push(_retArray);
			};
			if(businessObject.sections[i].attributes.name == "dConfiguration.MedicationGroup")
			{
				_retArray = setMedicationGroup(businessObject.sections[i].attributes);

				_bdConfigurationMedicationGroupFound = true;
				dAgencyV3XMLArray.push(_retArray);
			}	
		};
		if(_bdConfigurationMedicationGroupFound == false)
		{
			ErrorList.unshift("Agency Group Requires National Element");
		};
		if(_bdConfigurationMedicationGroupFound == false)
		{
			ErrorList.unshift("Agency Year Requires National Element");
		};
		
		//console.log(dConfigurationV3XMLArray);
	}
};

var setProcedureGroup = function(groupObject)
{
	for(var i=0;i<groupObject.length; i++) 
   	{	
   		dConfigurationV3XMLArray.push("<dConfiguration.AgencyYearGroup>") 
   		
   		if(getdConfigurationValue(businessObject.elements,"dConfiguration.06") == null){
			ErrorList.push("dConfiguration.06 National Element");
		}
		else{
			dConfigurationV3XMLArray.push("<dConfiguration.06>"+ getdConfigurationValue(businessObject.elements,"dConfiguration.06") + "</dConfiguration.06>") 
			D01_10 = value;
		};
		if(getdConfigurationValue(businessObject.elements,"dConfiguration.07") ==null){
			ErrorList.unshift("dConfiguration.07 National Element");
		}
		else{
			dConfigurationV3XMLArray.push("<dConfiguration.07>"+ getdConfigurationValue(businessObject.elements,"dConfiguration.07") + "</dConfiguration.07>")
			D01_12 = value;
		};
			 	
   		dConfigurationV3XMLArray.push("</dConfiguration.AgencyYearGroup>") 
	}
}

var setMedicationGroup = function(groupObject)
{//console.log("setAgencyYearGroup");
	for(var i=0;i<groupObject.length; i++) 
   	{	
   		dConfigurationV3XMLArray.push("<dConfiguration.AgencyServiceGroup>") 
   		
   		if(getdConfigurationValue(businessObject.elements,"dConfiguration.08") == null){
			ErrorList.push("dConfiguration.08 National Element");
		}
		else{
			dConfigurationV3XMLArray.push("<dConfiguration.08>"+ getdConfigurationValue(businessObject.elements,"dConfiguration.08") + "</dConfiguration.08>") 
			D01_10 = value;
		};
		if(getdConfigurationValue(businessObject.elements,"dConfiguration.09") ==null){
			ErrorList.unshift("dConfiguration.09 National Element");
		}
		else{
			dConfigurationV3XMLArray.push("<dConfiguration.09>"+ getdConfigurationValue(businessObject.elements,"dConfiguration.09") + "</dConfiguration.09>")
			D01_12 = value;
		};
			
   		dConfigurationV3XMLArray.push("</dConfiguration.AgencyServiceGroup>") 
	}
}


var isRequiredStateElement = function(elementID)
{
	return true;
};
var getdConfigurationValue = function(businessObject, valueObject)
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
*/
var dConfiguration02CodeMap = 
{"9911009":"6090",	
"9911011": "6100",	
"9911013":"6110",
"9911001": "6010",
"9911003": "6100",
"9911005": "6100",
"9911007": "6110",
"9911009": "6090",
"9911011": "6090",
"9911013": "6100",	
"9911015": "6110",	
"9911017": "6111",	
"9911019": "6112",	
"9911021": "6110",
"9911023": "6110",
"9911025": "6111", 
"9911027": "6111", 
"9911029": "6111",
"9911031": "6111",
"9911033": "6111"};

var dConfiguration06CodeMap = {
"9917001": "6010",
"9917003": "6100",
"9917005": "6100",
"9917007": "6110",
"9917011": "6090",
"9917013": "6100",	
"9917015": "6110",	
"9917017": "6111",	
"9917019": "6112",	
"9917009": "6120",	
"9917021": "6110",
"9917023": "6110",
"9917025": "6111", 
"9917027": "6111", 
"9917029": "6111",
"9917031": "6111"};
var dConfiguration08CodeMap = 
{"9917001": "6010",
"9917003": "6100",
"9917005": "6100",
"9917007": "6110",
"9917009": "6090",
"9917011": "6090",
"9917013": "6100",	
"9917015": "6110",	
"9917017": "6111",	
"9917019": "6112",	
"9917021": "6110",
"9917023": "6110",
"9917025": "6111", 
"9917027": "6111", 
"9917029": "6111",
"9917031": "6111",
"9917033": "6111"};

var dConfiguration12CodeMap = {
"9923001":	"0",
"9923003":	"1"
};