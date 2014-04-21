// JavaScript source code
var ErrorList = [];
var V3XMLArray = [];
var V2XMLArray = [];
var v3NOT_REPORTING = "7701005";
var v3NOT_RECORDED = "7701003";
var v3NOT_AVAILABLE = "-5"
var v2NOT_REPORTING = "-15";
var v2NOT_APPLICABLE = "-25"
var v2NOT_RECORDED = "-20";
var v2NOT_KNOWN = "-10";


var seteCrew = function (businessObject) {
    alert("NEED v2 NOTS");

    console.log(isDefined("eCrew"));  // if Not, set all to NOT_APPLICABLE
    return;
    var _retArray = [];

    console.log(businessObject);

    

    if (getValue(businessObject.elements, "eCrew.01") == null) {
        if (isRequiredStateElement("eCrew.01") == true) {
            ErrorList.push("eCrew.01 required");
            V3XMLArray.push("<eCrew.01>" + v3NOT_RECORDED + "</eCrew.01>")
            V2XMLArray.push("<E04_01>" + value + "</E04_01>")
        }
        else {
            V3XMLArray.push("<eCrew.0>" + v3NOT_REPORTING + "</eCrew.01>")
            V2XMLArray.push("<E04_01>" + value + "</E04_01>")
        }
    }
    else {
        V3XMLArray.push("<eCrew.01>" + getValue(businessObject.elements, "eCrew.01") + "</eCrew.01>")
        V2XMLArray.push("<E04_01>" + value + "</E04_01>")
    };


    if (getValue(businessObject.elements, "eCrew.02") == null) {
        if (isRequiredStateElement("eCrew.02") == true) {
            ErrorList.push("eCrew.02 required");
            V3XMLArray.push("<eCrew.02>" + v3NOT_RECORDED + "</eCrew.02>")
            V2XMLArray.push("<E04_03>" + value + "</E04_03>")
        }
        else {
            V3XMLArray.push("<eCrew.02>" + v3NOT_REPORTING + "</eCrew.02>")
            V2XMLArray.push("<E04_03>" + value + "</E04_03>")
        }

    }
    else {
        V3XMLArray.push("<eCrew.02>" + getValue(businessObject.elements, "eCrew.02") + "</eCrew.02>")
        V2XMLArray.push("<E04_03>" + value + "</E04_03>");
    };


    if (getValue(businessObject.elements, "eCrew.03") == null) {
        if (isRequiredStateElement("eCrew.03") == true) {
            ErrorList.push("eCrew.03 required");
            V3XMLArray.push("<eCrew.03>" + v3NOT_RECORDED + "</eCrew.03>");
            V2XMLArray.push("<E04_02>" + value + "</E04_02>")
        }
        else {
            V3XMLArray.push("<eCrew.03>" + v3NOT_REPORTING + "</eCrew.03>");
            V2XMLArray.push("<E04_02>" + value + "</E04_02>")
        }

    }
    else {
        V3XMLArray.push("<eCrew.03>" + getValue(businessObject.elements, "eCrew.03") + "</eCrew.03>")
        V2XMLArray.push("<E11_03>" + value + "</E11_03>")
    };


};



////////////////////////////////////////////////////
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