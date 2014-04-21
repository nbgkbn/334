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


var seteArrest = function (businessObject) {
    alert("NEED v2 NOTS");

    console.log(isDefined("eAirway"));  // if Not, set all to NOT_APPLICABLE
    return;
    var _retArray = [];

    console.log(businessObject);

    if (getValue(businessObject.elements, "eArrest.01") == null) {
            ErrorList.push("eArrest.01 required");
            V3XMLArray.push("<eArrest.01>" + v3NOT_RECORDED + "</eArrest.01>")
            V3XMLArray.push("<E11_01>" + v2NOT_RECORDED + "</E11_01>")
    }
    else {
        V3XMLArray.push("<eArrest.01>" + getValue(businessObject.elements, "eArrest.01") + "</eArrest.01>")
    };


    if (getValue(businessObject.elements, "eArrest.02") == null) {
        V3XMLArray.push("<eArrest.02>" + v3NOT_REPORTING + "</eArrest.02>");
        V2XMLArray.push("<E11_02>" + v3NOT_REPORTING + "</E11_02>");
    }
    else {
        V3XMLArray.push("<eArrest.02>" + getValue(businessObject.elements, "eArrest.02") + "</eArrest.02>")
        V2XMLArray.push("<E11_02>" + value + "</E11_02>");
    };


    if (getValue(businessObject.elements, "eArrest.03") == null) {
            ErrorList.push("eArrest.03 required");
            V3XMLArray.push("<eArrest.03>" + v3NOT_RECORDED + "</eArrest.03>")
            V2XMLArray.push("<E11_03>" + v2NOT_RECORDED + "</E11_03>")
    }
    else {
        V3XMLArray.push("<eArrest.03>" + getValue(businessObject.elements, "eArrest.03") + "</eArrest.03>")
        V2XMLArray.push("<E11_03>" + value + "</E11_03>")
    };


    if (getValue(businessObject.elements, "eArrest.04") == null) {
            ErrorList.push("eArrest.04 required");
            V3XMLArray.push("<eArrest.04>" + v3NOT_RECORDED + "</eArrest.04>")
            V2XMLArray.push("<E11_03>" + value + "</E11_03>")
    }
    else {
        V3XMLArray.push("<eArrest.04>" + getValue(businessObject.elements, "eArrest.04") + "</eArrest.04>")
        V2XMLArray.push("<E11_03>" + value + "</E11_03>")
    };


    if (getValue(businessObject.elements, "eArrest.05") == null) {
        ErrorList.push("eArrest.05 required");
        V3XMLArray.push("<eArrest.05>" + v3NOT_RECORDED + "</eArrest.05>")
    }
    else {
        V3XMLArray.push("<eArrest.05>" + getValue(businessObject.elements, "eArrest.05") + "</eArrest.05>")
    };

    if (getValue(businessObject.elements, "eArrest.06") == null) {
        if (isRequiredStateElement("eArrest.06") == true) {
            ErrorList.push("eArrest.06 required");
            V3XMLArray.push("<eArrest.06>" + v3NOT_RECORDED + "</eArrest.06>")
        }
        else {
            V3XMLArray.push("<eArrest.06>" + v3NOT_REPORTING + "</eArrest.06>")
        }
    }
    else {
        V3XMLArray.push("<eArrest.06>" + getValue(businessObject.elements, "eArrest.06") + "</eArrest.06>")
    };

    if (getValue(businessObject.elements, "eArrest.07") == null) {
        ErrorList.push("eArrest.07 required");
        V3XMLArray.push("<eArrest.07>" + v3NOT_RECORDED + "</eArrest.07>")
    }
    else {
        V3XMLArray.push("<eArrest.07>" + getValue(businessObject.elements, "eArrest.07") + "</eArrest.07>")
    };


    if (getValue(businessObject.elements, "eArrest.08") == null) {
        if (isRequiredStateElement("eArrest.08") == true) {
            ErrorList.push("eArrest.08 required");
            V3XMLArray.push("<eArrest.08>" + v3NOT_RECORDED + "</eArrest.08>")
        }
        else {
            V3XMLArray.push("<eArrest.08>" + v3NOT_REPORTING + "</eArrest.08>")
        }
    }
    else {
        V3XMLArray.push("<eArrest.08>" + getValue(businessObject.elements, "eArrest.08") + "</eArrest.08>")
    };

    if (getValue(businessObject.elements, "eArrest.09") == null) {
        ErrorList.push("eArrest.09 required");
        V3XMLArray.push("<eArrest.09>" + v3NOT_RECORDED + "</eArrest.09>")
    }
    else {
        V3XMLArray.push("<eArrest.09>" + getValue(businessObject.elements, "eArrest.09") + "</eArrest.09>")
    };

    if (getValue(businessObject.elements, "eArrest.10") == null) {
        ErrorList.push("eArrest.10 required");
        V3XMLArray.push("<eArrest.10>" + v3NOT_RECORDED + "</eArrest.10>")
    }
    else {
        V3XMLArray.push("<eArrest.10>" + getValue(businessObject.elements, "eArrest.10") + "</eArrest.10>")
    };

    if (getValue(businessObject.elements, "eArrest.11") == null) {
        ErrorList.push("eArrest.11 required");
        V3XMLArray.push("<eArrest.11>" + v3NOT_RECORDED + "</eArrest.11>")
        V2XMLArray.push("<E11_05>" + value + "</E11_05>")
    }
    else {
        V3XMLArray.push("<eArrest.11>" + getValue(businessObject.elements, "eArrest.11") + "</eArrest.11>")
        V2XMLArray.push("<E11_05>" + value + "</E11_05>")
    };

    if (getValue(businessObject.elements, "eArrest.12") == null) {
        ErrorList.push("eArrest.12 required");
        V3XMLArray.push("<eArrest.12>" + v3NOT_RECORDED + "</eArrest.12>")
        V2XMLArray.push("<E11_06>" + value + "</E11_06")
    }
    else {
        V3XMLArray.push("<eArrest.12>" + getValue(businessObject.elements, "eArrest.12") + "</eArrest.12>")
        V2XMLArray.push("<E11_06>" + value + "</E11_06>")
    };

    if (getValue(businessObject.elements, "eArrest.13") == null) {
        ErrorList.push("eArrest.13 required");
        V3XMLArray.push("<eArrest.13>" + null + "</eArrest.13>")
        V2XMLArray.push("<E11_067" + null + "</E11_07")
    }
    else {
        V3XMLArray.push("<eArrest.13>" + getValue(businessObject.elements, "eArrest.13") + "</eArrest.13>")
        V2XMLArray.push("<E11_07>" + value + "</E11_07>")
    };


    if (getValue(businessObject.elements, "eArrest.14") == null) {
        ErrorList.push("eArrest.14 required");
        V3XMLArray.push("<eArrest.14>" + v3NOT_RECORDED + "</eArrest.14>")
        V2XMLArray.push("<E11_08>" + value + "</E11_08")
    }
    else {
        V3XMLArray.push("<eArrest.14>" + getValue(businessObject.elements, "eArrest.14") + "</eArrest.14>")
        V2XMLArray.push("<E11_08>" + value + "</E11_08>")
    };


    if (getValue(businessObject.elements, "eArrest.15") == null) {
        if (isRequiredStateElement("eArrest.") == true) {
            ErrorList.push("eArrest.15 required");
            V3XMLArray.push("<eArrest.15>" + v3NOT_RECORDED + "</eArrest.15>")
            V3XMLArray.push("<E11_09>" + v2NOT_RECORDED + "</E11_09>")
        }
        else {
            V3XMLArray.push("<eArrest.15>" + v3NOT_REPORTING + "</eArrest.15>")
            V3XMLArray.push("<E11_09>" + v2NOT_REPORTING + "</E11_09>")
        }
    }
    else {
        V3XMLArray.push("<eArrest.15>" + getValue(businessObject.elements, "eArrest.15") + "</eArrest.15>")
        V2XMLArray.push("<E11_09>" + value + "</E11_09>")
    };

    if (getValue(businessObject.elements, "eArrest.16") == null) {
        ErrorList.push("eArrest.16 required");
        V3XMLArray.push("<eArrest.16>" + v3NOT_RECORDED + "</eArrest.16>")
        V2XMLArray.push("<E11_10>" + value + "</E11_10")
    }
    else {
        V3XMLArray.push("<eArrest.16>" + getValue(businessObject.elements, "eArrest.16") + "</eArrest.16>")
        V2XMLArray.push("<E11_10>" + value + "</E11_10>")
    };

    if (getValue(businessObject.elements, "eArrest.17") == null) {
        ErrorList.push("eArrest.17 required");
        V3XMLArray.push("<eArrest.17>" + v3NOT_RECORDED + "</eArrest.17>")
        V2XMLArray.push("<E11_11>" + value + "</E11_11")
    }
    else {
        V3XMLArray.push("<eArrest.17>" + getValue(businessObject.elements, "eArrest.17") + "</eArrest.17>")
        V2XMLArray.push("<E11_11>" + value + "</E11_11>")
    };

    if (getValue(businessObject.elements, "eArrest.18") == null) {
        ErrorList.push("eArrest.18 required");
        V3XMLArray.push("<eArrest.18>" + v3NOT_RECORDED + "</eArrest.18>")
    }
    else {
        V3XMLArray.push("<eArrest.18>" + getValue(businessObject.elements, "eArrest.18") + "</eArrest.18>")

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