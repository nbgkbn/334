var ErrorList = [];
var V3XMLArray = [];
var v3NOT_REPORTING = "7701005";
var v3NOT_RECORDED = "7701003";
var v3NOT_AVAILABLE = "-5"
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";

var setdAgency = function(businessObject)
{
	var V3XMLArray= [];
	var V2XMLArray= [];
	_bdAgencyServiceGroupFound = false;
	_bdAgencyYearFound = false;	
	
	console.log(businessObject);
	
	if(getValue(businessObject.elements,"dAgency.01") == null)
	{
		ErrorList.push("dAgency.01 National Element");
	}
	else
	{
		V3XMLArray.push("<dAgency.01>"+ getValue(businessObject.elements,"dAgency.01") + "</dAgency.01>") 
	};
	
	if(getValue(businessObject.elements,"dAgency.02") ==null)
	{
		ErrorList.push("dAgency.02 National Element");
	}
	else
	{
		V3XMLArray.push("<dAgency.02>"+ getValue(businessObject.elements,"dAgency.02") + "</dAgency.02>")
        V2XMLArray.push("<D01_01>" + getValue(businessObject.elements,"dAgency.02") + "</D01_01>")

	};
	if(getValue(businessObject.elements,"dAgency.03") ==null)
	{
		if(isRequiredStateElement("dAgency.03") == true)
		{
			ErrorList.push("dAgency.03 required");
			V3XMLArray.push("<dAgency.03>"+ v3NOT_RECORDED + "</dAgency.03>")
			V2XMLArray.push("<D01_02>"+v2NOT_RECORDED  + "</D01_02>")
		}
		else
		{
			V3XMLArray.push("<dAgency.03>"+ v3NOT_REPORTING + "</dAgency.03>")
			V2XMLArray.push("<D01_02>"+v2NOT_REPORTING  + "</D01_02>")

		}
	}
	else
	{
		V3XMLArray.push("<dAgency.03>"+ getValue(businessObject.elements,"dAgency.03") + "</dAgency.03>")
    	V2XMLArray.push("<D01_02>" + getValue(businessObject.elements,"dAgency.03") + "</D01_02>")
    };
    
	if(getValue(businessObject.elements,"dAgency.04") ==null)
	{
		ErrorList.unshift("dAgency.04 National Element");
	}
	else
	{
		V3XMLArray.push("<dAgency.04>"+ getValue(businessObject.elements,"dAgency.04") + "</dAgency.04>");
		V2XMLArray.push("<D01_02>"+ getValue(businessObject.elements,"dAgency.04")  + "</D01_02>")
	};
	
	if(getValue(businessObject.elements,"dAgency.09") ==null)
	{
		ErrorList.unshift("dAgency.09 National Element");
	}
	else
	{
		V3XMLArray.push("<dAgency.09>"+ getValue(businessObject.elements,"dAgency.09") + "</dAgency.09>");
		V2XMLArray.push("<D01_05>"+ dAgency09CodeMap[getValue(businessObject.elements,"dAgency.09")]  + "</D01_05>")
	};

console.log("dAgency10 requires M");

	if(getValue(businessObject.elements,"dAgency.10") ==null)
	{
		if(isRequiredStateElement("dAgency.10") == true)
		{
		ErrorList.push("dAgency.10 required");
}
else
{
V3XMLArray.push("<dAgency.10>"+ getValue(businessObject.elements,"dAgency.10") + "</dAgency.10>")
}
}
else
{
D01_06 = dAgency10CodeMap[getValue(businessObject.elements,"dAgency.10")];
V3XMLArray.push("<dAgency.10>"+ getValue(businessObject.elements,"dAgency.10") + "</dAgency.10>")
};
if(getValue(businessObject.elements,"dAgency.11") ==null)
{
ErrorList.unshift("dAgency.11 National Element");
}
else
{
D01_07 = dAgency11CodeMap[getValue(businessObject.elements,"dAgency.11")];
V3XMLArray.push("<dAgency.11>"+ getValue(businessObject.elements,"dAgency.11") + "</dAgency.11>")
};
if(getValue(businessObject.elements,"dAgency.12") ==null)
{
ErrorList.unshift("dAgency.12 National Element");	
}
else
{
V3XMLArray.push("<dAgency.12>"+ getValue(businessObject.elements,"dAgency.12") + "</dAgency.12>")
D01_09 = dAgency12CodeMap[getValue(businessObject.elements,"dAgency.12")];
};
if(getValue(businessObject.elements,"dAgency.13") ==null)
{
ErrorList.unshift("dAgency.13 National Element");
}
else
{
V3XMLArray.push("<dAgency.13>"+ getValue(businessObject.elements,"dAgency.13") + "</dAgency.13>")
D01_08 = dAgency13CodeMap[getValue(businessObject.elements,"dAgency.13")];
};
if(getValue(businessObject.elements,"dAgency.14") ==null)
{
ErrorList.unshift("dAgency.14 National Element");
}
else
{
V3XMLArray.push("<dAgency.14>"+ getValue(businessObject.elements,"dAgency.14") + "</dAgency.14>")
};
if(getValue(businessObject.elements,"dAgency.23") ==null)
{
V3XMLArray.push("<dAgency.23>"+ getValue(businessObject.elements,"dAgency.23") + "</dAgency.23>")
D01_08 = dAgency23CodeMap[getValue(businessObject.elements,"dAgency.23")];
};
if(getValue(businessObject.elements,"dAgency.24") ==null)
{
V3XMLArray.push("<dAgency.24>"+ getValue(businessObject.elements,"dAgency.24") + "</dAgency.24>")
D01_20  = dAgency24CodeMap[getValue(businessObject.elements,"dAgency.24")];
};
if(getValue(businessObject.elements,"dAgency.25") ==null)
{
ErrorList.unshift("dAgency.25 National Element");
}
else
{
V3XMLArray.push("<dAgency.25>"+ getValue(businessObject.elements,"dAgency.25") + "</dAgency.25>")
D01_21 = getValue(businessObject.elements,"dAgency.25") ;
};
if(getValue(businessObject.elements,"dAgency.26") ==null)
{
ErrorList.unshift("dAgency.26 National Element");
}
else
{
V3XMLArray.push("<dAgency.26>"+ getValue(businessObject.elements,"dAgency.26") + "</dAgency.26>")
};	
for(var i=0;i<businessObject.sections.length; i++) 
{
//console.log(businessObject.sections[i].attributes);
if(businessObject.sections[i].attributes.name == "dAgency.AgencyServiceGroup")
{
V3XMLArray = setAgencyServiceGroup(businessObject.sections[i].attributes);
_bdAgencyServiceGroupFound = true;
V3XMLArray.push(V3XMLArray);
};
if(businessObject.sections[i].attributes.name == "dAgency.AgencyYearGroup")
{
V3XMLArray = setAgencyYearGroup(businessObject.sections[i].attributes);
console.log(V3XMLArray);
_bdAgencyYearFound = true;
V3XMLArray.push(V3XMLArray);
}	
};
if(_bdAgencyServiceGroupFound == false)
{
ErrorList.unshift("Agency Group Requires National Element");
};
if(_bdAgencyYearFound == false)
{
ErrorList.unshift("Agency Year Requires National Element");
};
console.log(V3XMLArray);
};
var setAgencyServiceGroup = function(groupObject)
{
var V3XMLArray = [];
V3XMLArray.push("<dAgency.AgencyServiceGroup>") ;
   	
   	if(getValue(groupObject.elements,"dAgency.05") == null)
   	{
ErrorList.push("dAgency.05 National Element");
}
else
{
V3XMLArray.push("<dAgency.05>"+ getValue(groupObject.elements,"dAgency.05") + "</dAgency.05>") 
};
if(getValue(groupObject.elements,"dAgency.06") ==null)
{
ErrorList.unshift("dAgency.06 National Element");
}
else
{
V3XMLArray.push("<dAgency.06>"+ getValue(groupObject.elements,"dAgency.06") + "</dAgency.06>")
D01_04 = getValue(groupObject.elements,"dAgency.06");
};
if(getValue(groupObject.elements,"dAgency.07") ==null)
{
if(isRequiredStateElement("dAgency.07") == true)
{
ErrorList.push("dAgency.07 required");
V3XMLArray.push("<dAgency.07>"+ v3NOT_RECORDED + "</dAgency.07>");
};	
}
else
{
V3XMLArray.push("<dAgency.07>"+ getValue(groupObject.elements,"dAgency.07") + "</dAgency.07>")
};
if(getValue(groupObject.elements,"dAgency.08") ==null)
{
if(isRequiredStateElement("dAgency.08") == true)
{
ErrorList.push("dAgency.08 required");
V3XMLArray.push("<dAgency.08>"+ v3NOT_RECORDED + "</dAgency.08>")
}
}	
else
{
V3XMLArray.push("<dAgency.08>"+ getValue(groupObject.elements,"dAgency.08") + "</dAgency.08>")
};   
   	V3XMLArray.push("</dAgency.AgencyServiceGroup>") 

return V3XMLArray;
}
var setAgencyYearGroup = function(groupObject)
{
var V3XMLArray=[];
  V3XMLArray.push("<dAgency.AgencyYearGroup>") 
 
   	if(getValue(groupObject.elements,"dAgency.15") == null)
   	{
ErrorList.push("dAgency.15 National Element");
V3XMLArray.push("<dAgency.15> "+ "ERROR  dAgency.15 " + "</dAgency.15>") 
}
else
{
V3XMLArray.push("<dAgency.15>"+ getValue(groupObject.elements,"dAgency.15") + "</dAgency.15>") 
D01_10 =  getValue(groupObject.elements,"dAgency.15");
};
if(getValue(groupObject.elements,"dAgency.16") ==null)
{
if(isRequiredStateElement("dAgency.16") == true)
{
ErrorList.push("dAgency.16 required");
V3XMLArray.push("<dAgency.16>"+ v3NOT_RECORDED + "</dAgency.16>")
}	
}
else
{
V3XMLArray.push("<dAgency.16>"+ getValue(groupObject.elements,"dAgency.16") + "</dAgency.16>")
D01_12 =  getValue(groupObject.elements,"dAgency.16");
};

if(getValue(groupObject.elements,"dAgency.17") ==null)
{
if(isRequiredStateElement("dAgency.17") == true)
{
ErrorList.push("dAgency.17 required");
V3XMLArray.push("<dAgency.17>"+ v3NOT_RECORDED + "</dAgency.17>")
}
}	
else
{
V3XMLArray.push("<dAgency.17>"+ getValue(groupObject.elements,"dAgency.17") + "</dAgency.17>")
D01_13 = getValue(groupObject.elements,"dAgency.17");
};
if(getValue(groupObject.elements,"dAgency.18") ==null)
{
if(isRequiredStateElement("dAgency.18") == true)
{
ErrorList.push("dAgency.18 required");
V3XMLArray.push("<dAgency.18>"+ v3NOT_RECORDED + "</dAgency.18>")
}	
}
else
{
V3XMLArray.push("<dAgency.18>"+ getValue(groupObject.elements,"dAgency.18") + "</dAgency.18>");
D01_14 = getValue(groupObject.elements,"dAgency.18")
};  
if(getValue(groupObject.elements,"dAgency.19") ==null)
{
if(isRequiredStateElement("dAgency.19") == true)
{
ErrorList.push("dAgency.19 required");
V3XMLArray.push("<dAgency.19>"+ v3NOT_RECORDED + "</dAgency.19>")
}	
}
else
{
V3XMLArray.push("<dAgency.19>"+ getValue(groupObject.elements,"dAgency.19") + "</dAgency.19>")
D01_15 =getValue(groupObject.elements,"dAgency.19");

};
if(getValue(groupObject.elements,"dAgency.20") ==null)
{
if(isRequiredStateElement("dAgency.20") == true)
{
ErrorList.push("dAgency.20 required");
V3XMLArray.push("<dAgency.20>"+ v3NOT_RECORDED + "</dAgency.20>")
}	
}
else
{
V3XMLArray.push("<dAgency.20>"+ getValue(groupObject.elements,"dAgency.20") + "</dAgency.20>");
D01_16 = getValue(groupObject.elements,"dAgency.20")
};  	
if(getValue(groupObject.elements,"dAgency.21") ==null)
{
if(isRequiredStateElement("dAgency.21") == true)
{
ErrorList.push("dAgency.21 required");
V3XMLArray.push("<dAgency.21>"+ v3NOT_RECORDED + "</dAgency.21>")
}
}
else
{
V3XMLArray.push("<dAgency.21>"+ getValue(groupObject.elements,"dAgency.21") + "</dAgency.21>")
D01_17 = getValue(groupObject.elements,"dAgency.21")

};
if(getValue(groupObject.elements,"dAgency.22") ==null)
{
if(isRequiredStateElement("dAgency.22") == true)
{
ErrorList.push("dAgency.22 required");
V3XMLArray.push("<dAgency.22>"+ v3NOT_RECORDED + "</dAgency.22>")
}
}
else
{
V3XMLArray.push("<dAgency.22>"+ getValue(groupObject.elements,"dAgency.22") + "</dAgency.22>");
D01_18 = getValue(groupObject.elements,"dAgency.22");

};  
V3XMLArray.push("</dAgency.AgencyYearGroup>") 
return V3XMLArray;
};


var isRequiredStateElement = function(elementID)
{
return true;
};
var getValue = function(businessObject, valueObject)
{
//console.log(businessObject.length);
var _retValue = null;
var _bFound = false;
i=0;
while (i<businessObject.length)
{ 
if(_bFound == false)
{
if(businessObject[i].attributes.title ==  valueObject)
{
_bFound = true;
if(businessObject[i].attributes.value == undefined)
{
_retVal = null;
}
else
{
_retVal = businessObject[i].attributes.value;
}
}
}
i++;
}
return _retVal;
}

var dAgency09CodeMap = {	
"9920001":	"5610",
"9920003":	"5620",
"9920005":	"5630",
"9920007":	"5660",
"9920011":	"5640",
"9920013":	"5650",
"9920015":	"5670",
"9920017":	"5660",
"9920015":	"5670",	
"9920019":	"5680"};

var dAgency10CodeMap = {	
"9920001":	"5690",	
"9920003":	"5700",	
"9920005":	"5710",
"9920007":	"5710",
"9920011":	"5720",	
"9920013":	"5730",
"9920015":	"5750",
"9920017":	"5750",	
"9920019":	"5760"};

var dAgency11CodeMap = {
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

var dAgency12CodeMap = {
"1016001": "5870",
"1016001": "5880",
"1016001": "5890"};

var dAgency13CodeMap = {
"9912001":	"5820",
"9912003":	"5830",	
"9912005":	"5840",	
"9912007":	"5850",	
"9912009":	"5860"	
};

var dAgency23CodeMap = {
"1027017":	"5900",	
"1027015":	"5910",	
"1027013":	"5920",	
"1027011":	"5930",	
"1027009":	"5940",	
"1027007":	"5950",	
"1027005":	"5960",	
"1027003":	"5970",	
"1027001":	"5960",	

};

var dAgency24CodeMap = {
"9923001":	"0",
"9923003":	"1"
};

var Agency = Parse.Object.extend("Agency");

var count = function(object)
{
    var query = new Parse.Query(Agency);
    var promise = query.count(
    {
        success: function(count)
        {
            return count;
        },
        error: function(error)
        {
            console.log(error);
        }
    });
    return promise;
};

