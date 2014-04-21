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


var seteDispatch = function (businessObject) {
    alert("NEED v2 NOTS");

    console.log(isDefined("eDispatch"));  // if Not, set all to NOT_APPLICABLE
    return;
    var _retArray = [];

    console.log(businessObject);

    V3XMLArray.push("<eDispatch>")

    if (getdAgencyValue(businessObject.elements, "eDispatch.01") == null) {
        if (isRequiredStateElement("eDispatch.01") == true) {
            ErrorList.push("eDispatch.01 required");
            V3XMLArray.push("<eDispatch.01>" + v3NOT_RECORDED + "</eDispatch.01>");
            V2XMLArray.push("<E03_01>" + v2NOT_RECORDED + "</E03_01>")
        }
        else {
            V3XMLArray.push("<eDispatch.01>" + v3NOT_REPORTING + "</eDispatch.01>");
            V2XMLArray.push("<E03_01>" + v2NOT_REPORTING + "</E03_01>")
        }
    }
    else {
        V3XMLArray.push("<eDispatch.01>" + getdAgencyValue(businessObject.elements, "eDispatch.01") + "</eDispatch.01>")
        V2XMLArray.push("<E03_01>" + value + "</E03_01>")
    };



    if (getdAgencyValue(businessObject.elements, "eDispatch.02") == null) {
        if (isRequiredStateElement("eDispatch.02") == true) {
            ErrorList.push("eDispatch.02 required");
            V3XMLArray.push("<eDispatch.02>" + v3NOT_RECORDED + "</eDispatch.02>");
            V2XMLArray.push("<E03_02>" + v2NOT_RECORDED + "</E03_02>")
        }
        else {
            V3XMLArray.push("<eDispatch.02>" + v3NOT_REPORTING + "</eDispatch.02>");
            V2XMLArray.push("<E03_02>" + v2NOT_REPORTING + "</E03_02>")
        }
    }
    else {
        V3XMLArray.push("<eDispatch.02>" + getdAgencyValue(businessObject.elements, "eDispatch.02") + "</eDispatch.02>")
        V2XMLArray.push("<E03_02>" + value + "</E03_02>")
    };


    if (getdAgencyValue(businessObject.elements, "eDispatch.03") == null) {
        V3XMLArray.push("<eDispatch.03>" + null + "</eDispatch.03>");
        V2XMLArray.push("<E03_03>" + value + "</E03_03>")
    }
    else 
    {
        V3XMLArray.push("<eDispatch.03>" + getdAgencyValue(businessObject.elements, "eDispatch.03") + "</eDispatch.03>")
        V2XMLArray.push("<E03_03>" + getdAgencyValue(businessObject.elements, "eDispatch.03") + "</E03_03>")
    };

    if (getdAgencyValue(businessObject.elements, "eDispatch.04") == null) {
        V3XMLArray.push("<eDispatch.04>" + null + "</eDispatch.04>");
    }
    else {
        V3XMLArray.push("<eDispatch.04>" + getdAgencyValue(businessObject.elements, "eDispatch.04") + "</eDispatch.04>")
    };

    if (getdAgencyValue(businessObject.elements, "eDispatch.05") == null) {
        V3XMLArray.push("<eDispatch.05>" + null + "</eDispatch.05>");
    }
    else {
        V3XMLArray.push("<eDispatch.05>" + getdAgencyValue(businessObject.elements, "eDispatch.05") + "</eDispatch.05>")
    };


    V3XMLArray.push("</eDispatch.ShockGroup>")

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