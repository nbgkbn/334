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


var seteDevice = function (businessObject) {
    alert("NEED v2 NOTS");

    console.log(isDefined("eDevice"));  // if Not, set all to NOT_APPLICABLE
    return;
    var _retArray = [];

    console.log(businessObject);

    

    if (getValue(businessObject.elements, "eDevice.01") == null) 
    {
        V3XMLArray.push("<eDevice.01>" + null + "</eDevice.01>")
            
    }
    else 
    {
        V3XMLArray.push("<eDevice.01>" + getValue(businessObject.elements, "eDevice.01") + "</eDevice.01>")
    };

    if (getValue(businessObject.elements, "eDevice.02") == null) {
        V3XMLArray.push("<eDevice.02>" + null + "</eDevice.02>")
        V2XMLArray.push("<E21_01>" + value + "</E21_01>")
    }
    else {
        V3XMLArray.push("<eDevice.02>" + getValue(businessObject.elements, "eDevice.02") + "</eDevice.02>")
        V2XMLArray.push("<E21_01>" + value + "</E21_01>")
    };


    if (getValue(businessObject.elements, "eDevice.03") == null) {
        V3XMLArray.push("<eDevice.03>" + null + "</eDevice.03>")
        V2XMLArray.push("<E21_02>" + value + "</E21_02>")
    }
    else {
        V3XMLArray.push("<eDevice.03>" + getValue(businessObject.elements, "eDevice.03") + "</eDevice.03>")
        V2XMLArray.push("<E21_02>" + value + "</E21_02>")
    };
            /////////////////////////////////////
    V3XMLArray.push("<eDevice.WaveformGroup>")
    if (getValue(businessObject.elements, "eDevice.04") == null) {
        V3XMLArray.push("<eDevice.04>" + null + "</eDevice.04>")
        V2XMLArray.push("<E21_03>" + value + "</E21_03>")
    }
    else {
        V3XMLArray.push("<eDevice.04>" + getValue(businessObject.elements, "eDevice.04") + "</eDevice.04>")
        V2XMLArray.push("<E21_03>" + value + "</E21_03>")
    };

    if (getValue(businessObject.elements, "eDevice.05") == null) {
        V3XMLArray.push("<eDevice.05>" + null + "</eDevice.05>")
        V2XMLArray.push("<E21_04>" + value + "</E21_04>")
    }
    else {
        V3XMLArray.push("<eDevice.05>" + getValue(businessObject.elements, "eDevice.05") + "</eDevice.05>")
        V2XMLArray.push("<E21_04>" + value + "</E21_04>")
    };

    if (getValue(businessObject.elements, "eDevice.06") == null) {
        V3XMLArray.push("<eDevice.06>" + null + "</eDevice.06>")
        V2XMLArray.push("<E21_05>" + value + "</E21_05>")
    }
    else {
        V3XMLArray.push("<eDevice.06>" + getValue(businessObject.elements, "eDevice.06") + "</eDevice.06>")
        V2XMLArray.push("<E21_05>" + value + "</E21_05>")
    };
    V3XMLArray.push("</eDevice.WaveformGroup>")
        //////////////////////

    if (getValue(businessObject.elements, "eDevice.07") == null) {
        V3XMLArray.push("<eDevice.07>" + null + "</eDevice.07>")
        V2XMLArray.push("<E21_06>" + value + "</E21_06>")
    }
    else {
        V3XMLArray.push("<eDevice.07>" + getValue(businessObject.elements, "eDevice.07") + "</eDevice.07>")
        V2XMLArray.push("<E21_06>" + value + "</E21_06>")
    };

    if (getValue(businessObject.elements, "eDevice.08") == null) {
        V3XMLArray.push("<eDevice.08>" + null + "</eDevice.08>")
        V2XMLArray.push("<E21_07>" + value + "</E21_07>")
    }
    else {
        V3XMLArray.push("<eDevice.08>" + getValue(businessObject.elements, "eDevice.08") + "</eDevice.08>")
        V2XMLArray.push("<E21_07>" + value + "</E21_07>")
    };

        ///////////////////////
    V3XMLArray.push("<eDevice.ShockGroup>")

    if (getValue(businessObject.elements, "eDevice.09") == null) {
        V3XMLArray.push("<eDevice.09>" + null + "</eDevice.09>")
        V2XMLArray.push("<E21_08>" + value + "</E21_08>")
    }
    else {
        V3XMLArray.push("<eDevice.09>" + getValue(businessObject.elements, "eDevice.09") + "</eDevice.09>")
        V2XMLArray.push("<E21_08>" + value + "</E21_08>")
    };

    if (getValue(businessObject.elements, "eDevice.10") == null) {
        V3XMLArray.push("<eDevice.10>" + null + "</eDevice.10>")
        V2XMLArray.push("<E21_09>" + value + "</E21_09>")
    }
    else {
        V3XMLArray.push("<eDevice.10>" + getValue(businessObject.elements, "eDevice.10") + "</eDevice.10>")
        V2XMLArray.push("<E21_09>" + value + "</E21_09>")
    };

    if (getValue(businessObject.elements, "eDevice.11") == null) {
        V3XMLArray.push("<eDevice.11>" + null + "</eDevice.11>")
        V2XMLArray.push("<E21_10>" + value + "</E21_10>")
    }
    else {
        V3XMLArray.push("<eDevice.11>" + getValue(businessObject.elements, "eDevice.11") + "</eDevice.11>")
        V2XMLArray.push("<E21_10>" + value + "</E21_10>")
    };
    if (getValue(businessObject.elements, "eDevice.12") == null) {
        V3XMLArray.push("<eDevice.12>" + null + "</eDevice.12>")
        V2XMLArray.push("<E21_11>" + value + "</E21_11>")
    }
    else {
        V3XMLArray.push("<eDevice.12>" + getValue(businessObject.elements, "eDevice.12") + "</eDevice.12>")
        V2XMLArray.push("<E21_11>" + value + "</E21_11>")
    };
    V3XMLArray.push("</eDevice.ShockGroup>")

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