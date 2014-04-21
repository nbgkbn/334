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


var seteDisposition = function (businessObject) {
    alert("NEED v2 NOTS");

    console.log(isDefined("eDisposition"));  // if Not, set all to NOT_APPLICABLE
    return;
    var _retArray = [];

    console.log(businessObject);

    V3XMLArray.push("<eDisposition.DestinationGroup>")

    if (getdAgencyValue(businessObject.elements, "eDisposition.01") == null) {
        if (isRequiredStateElement("eDisposition.01") == true) {
            ErrorList.push("eDisposition.01 required");
            V3XMLArray.push("<eDisposition.01>" + v3NOT_RECORDED + "</eDisposition.01>");
            V2XMLArray.push("<E20_01>" + v2NOT_RECORDED + "</E20_01>")
        }
        else {
            V3XMLArray.push("<eDisposition.01>" + v3NOT_REPORTING + "</eDisposition.01>");
            V2XMLArray.push("<E20_01>" + v2NOT_REPORTING + "</E20_01>")
        }
    }
    else {
        V3XMLArray.push("<eDisposition.01>" + getdAgencyValue(businessObject.elements, "eDisposition.01") + "</eDisposition.01>")
        V2XMLArray.push("<E20_01>" + value + "</E20_01>")
    };



    if (getdAgencyValue(businessObject.elements, "eDisposition.02") == null) {
        if (isRequiredStateElement("eDisposition.02") == true) {
            ErrorList.push("eDisposition.02 required");
            V3XMLArray.push("<eDisposition.02>" + v3NOT_RECORDED + "</eDisposition.02>");
            V2XMLArray.push("<E20_02>" + v2NOT_RECORDED + "</E20_02>")
        }
        else {
            V3XMLArray.push("<eDisposition.02>" + v3NOT_REPORTING + "</eDisposition.02>");
            V2XMLArray.push("<E20_02>" + v2NOT_REPORTING + "</E20_02>")
        }
    }
    else {
        V3XMLArray.push("<eDisposition.02>" + getdAgencyValue(businessObject.elements, "eDisposition.02") + "</eDisposition.02>")
        V2XMLArray.push("<E20_02>" + value + "</E20_02>")
    };


    if (getdAgencyValue(businessObject.elements, "eDisposition.03") == null) {
        if (isRequiredStateElement("eDisposition.03") == true) {
            ErrorList.push("eDisposition.03 required");
            V3XMLArray.push("<eDisposition.03>" + v3NOT_RECORDED + "</eDisposition.03>");
            V2XMLArray.push("<E20_03>" + v2NOT_RECORDED + "</E20_03>")
        }
        else {
            V3XMLArray.push("<eDisposition.03>" + v3NOT_REPORTING + "</eDisposition.03>");
            V2XMLArray.push("<E20_03>" + v2NOT_REPORTING + "</E20_03>")
        }
    }
    else {
        V3XMLArray.push("<eDisposition.03>" + getdAgencyValue(businessObject.elements, "eDisposition.03") + "</eDisposition.03>")
        V2XMLArray.push("<E20_03>" + value + "</E20_03>")
    };


    if (getdAgencyValue(businessObject.elements, "eDisposition.04") == null) {
        if (isRequiredStateElement("eDisposition.04") == true) {
            ErrorList.push("eDisposition.04 required");
            V3XMLArray.push("<eDisposition.04>" + v3NOT_RECORDED + "</eDisposition.04>");
            V2XMLArray.push("<E20_04>" + v2NOT_RECORDED + "</E20_04>")
        }
        else {
            V3XMLArray.push("<eDisposition.04>" + v3NOT_REPORTING + "</eDisposition.04>");
            V2XMLArray.push("<E20_04>" + v2NOT_REPORTING + "</E20_04>")
        }
    }
    else {
        V3XMLArray.push("<eDisposition.04>" + getdAgencyValue(businessObject.elements, "eDisposition.04") + "</eDisposition.04>")
        V2XMLArray.push("<E20_04>" + value + "</E20_04>")
    };



    if (getdAgencyValue(businessObject.elements, "eDisposition.05") == null) {
        if (isRequiredStateElement("eDisposition.05") == true) {
            ErrorList.push("eDisposition.05 required");
            V3XMLArray.push("<eDisposition.05>" + v3NOT_RECORDED + "</eDisposition.05>");
            V2XMLArray.push("<E20_05>" + v2NOT_RECORDED + "</E20_05>")
        }
        else {
            V3XMLArray.push("<eDisposition.05>" + v3NOT_REPORTING + "</eDisposition.05>");
            V2XMLArray.push("<E20_05>" + v2NOT_REPORTING + "</E20_05>")
        }
    }
    else {
        V3XMLArray.push("<eDisposition.05>" + getdAgencyValue(businessObject.elements, "eDisposition.05") + "</eDisposition.05>")
        V2XMLArray.push("<E20_05>" + value + "</E20_05>")
    };

    if (getdAgencyValue(businessObject.elements, "eDisposition.06") == null) {
        if (isRequiredStateElement("eDisposition.06") == true) {
            ErrorList.push("eDisposition.06 required");
            V3XMLArray.push("<eDisposition.06>" + v3NOT_RECORDED + "</eDisposition.06>");
            V2XMLArray.push("<E20_06>" + v2NOT_RECORDED + "</E20_06>")
        }
        else {
            V3XMLArray.push("<eDisposition.06>" + v3NOT_REPORTING + "</eDisposition.06>");
            V2XMLArray.push("<E20_06>" + v2NOT_REPORTING + "</E20_06>")
        }
    }
    else {
        V3XMLArray.push("<eDisposition.06>" + getdAgencyValue(businessObject.elements, "eDisposition.06") + "</eDisposition.06>")
        V2XMLArray.push("<E20_06>" + value + "</E20_06>")
    };


    if (getdAgencyValue(businessObject.elements, "eDisposition.07") == null) {
        if (isRequiredStateElement("eDisposition.07") == true) {
            ErrorList.push("eDisposition.07 required");
            V3XMLArray.push("<eDisposition.07>" + v3NOT_RECORDED + "</eDisposition.07>");
            V2XMLArray.push("<E20_07>" + v2NOT_RECORDED + "</E20_07>")
        }
        else {
            V3XMLArray.push("<eDisposition.07>" + v3NOT_REPORTING + "</eDisposition.07>");
            V2XMLArray.push("<E20_07>" + v2NOT_REPORTING + "</E20_07>")
        }
    }
    else {
        V3XMLArray.push("<eDisposition.07>" + getdAgencyValue(businessObject.elements, "eDisposition.07") + "</eDisposition.07>")
        V2XMLArray.push("<E20_07>" + value + "</E20_07>")
    };

    if (getdAgencyValue(businessObject.elements, "eDisposition.08") == null) {
        V3XMLArray.push("<eDisposition.08>" + null + "</eDisposition.08>");
    }
    else 
    {
        V3XMLArray.push("<eDisposition.08>" + getdAgencyValue(businessObject.elements, "eDisposition.08") + "</eDisposition.08>")
    
    };

    if (getdAgencyValue(businessObject.elements, "eDisposition.09") == null) {
        V3XMLArray.push("<eDisposition.09>" + null + "</eDisposition.09>");
    }
    else {
        V3XMLArray.push("<eDisposition.09>" + getdAgencyValue(businessObject.elements, "eDisposition.09") + "</eDisposition.09>")
    };

    if (getdAgencyValue(businessObject.elements, "eDisposition.10") == null) {
        V3XMLArray.push("<eDisposition.10>" + null + "</eDisposition.10>");
    }
    else {
        V3XMLArray.push("<eDisposition.10>" + getdAgencyValue(businessObject.elements, "eDisposition.10") + "</eDisposition.10>")
    };

    if (getdAgencyValue(businessObject.elements, "eDisposition.11") == null) {
        if (isRequiredStateElement("eDisposition.11") == true) {
            ErrorList.push("eDisposition.11 required");
            V3XMLArray.push("<eDisposition.11>" + v3NOT_RECORDED + "</eDisposition.11>");
            
        }
        else {
            V3XMLArray.push("<eDisposition.11>" + v3NOT_REPORTING + "</eDisposition.11>");
            
        }
    }
    else {
        V3XMLArray.push("<eDisposition.11>" + getdAgencyValue(businessObject.elements, "eDisposition.11") + "</eDisposition.11>")
        
    };

    if (getdAgencyValue(businessObject.elements, "eDisposition.12") == null) {
        if (isRequiredStateElement("eDisposition.12") == true) {
            ErrorList.push("eDisposition.12 required");
            V3XMLArray.push("<eDisposition.12>" + v3NOT_RECORDED + "</eDisposition.12>");
            V2XMLArray.push("<E20_10>" + v2NOT_RECORDED + "</E20_10>")
        }
        else {
            V3XMLArray.push("<eDisposition.12>" + v3NOT_REPORTING + "</eDisposition.12>");
            V2XMLArray.push("<E20_10>" + v2NOT_REPORTING + "</E20_10>")
        }
    }
    else {
        V3XMLArray.push("<eDisposition.12>" + getdAgencyValue(businessObject.elements, "eDisposition.12") + "</eDisposition.12>")
        V2XMLArray.push("<E20_10>" + value + "</E20_10>")
    };


    if (getdAgencyValue(businessObject.elements, "eDisposition.13") == null) {
        V3XMLArray.push("<eDisposition.13>" + null + "</eDisposition.13>");
        V2XMLArray.push("<E20_11>" + null + "</E20_11>")
    }
    else {
        V3XMLArray.push("<eDisposition.13>" + getdAgencyValue(businessObject.elements, "eDisposition.13") + "</eDisposition.13>")
        V2XMLArray.push("<E20_11>" + value + "</E20_11>")
    };



    if (getdAgencyValue(businessObject.elements, "eDisposition.14") == null) {
        V3XMLArray.push("<eDisposition.14>" + null + "</eDisposition.14>");
        V2XMLArray.push("<E20_12>" + null + "</E20_12>")
    }
    else {
        V3XMLArray.push("<eDisposition.14>" + getdAgencyValue(businessObject.elements, "eDisposition.14") + "</eDisposition.14>")
        V2XMLArray.push("<E20_12>" + value + "</E20_12>")
    };


    if (getdAgencyValue(businessObject.elements, "eDisposition.15") == null) {
        V3XMLArray.push("<eDisposition.15>" + null + "</eDisposition.15>");
        V2XMLArray.push("<E20_13>" + null + "</E20_13>")
    }
    else {
        V3XMLArray.push("<eDisposition.15>" + getdAgencyValue(businessObject.elements, "eDisposition.15") + "</eDisposition.15>")
        V2XMLArray.push("<E20_13>" + value + "</E20_13>")
    };


    if (getdAgencyValue(businessObject.elements, "eDisposition.16") == null) {
        if (isRequiredStateElement("eDisposition.16") == true) {
            ErrorList.push("eDisposition.16 required");
            V3XMLArray.push("<eDisposition.16>" + v3NOT_RECORDED + "</eDisposition.16>");
        }
        else {
            V3XMLArray.push("<eDisposition.16>" + v3NOT_REPORTING + "</eDisposition.16>");
        }
    }
    else {
        V3XMLArray.push("<eDisposition.16>" + getdAgencyValue(businessObject.elements, "eDisposition.16") + "</eDisposition.16>")
    };


    if (getdAgencyValue(businessObject.elements, "eDisposition.17") == null) {
        if (isRequiredStateElement("eDisposition.17") == true) {
            ErrorList.push("eDisposition.17 required");
            V3XMLArray.push("<eDisposition.17>" + v3NOT_RECORDED + "</eDisposition.17>");
            V2XMLArray.push("<E20_14>" + v2NOT_RECORDED + "</E20_14>")
        }
        else {
            V3XMLArray.push("<eDisposition.17>" + v3NOT_REPORTING + "</eDisposition.17>");
            V2XMLArray.push("<E20_14>" + v2NOT_REPORTING + "</E20_14>")
        }
    }
    else {
        V3XMLArray.push("<eDisposition.17>" + getdAgencyValue(businessObject.elements, "eDisposition.17") + "</eDisposition.17>")
        V2XMLArray.push("<E20_14>" + value + "</E20_14>")
    };


    if (getdAgencyValue(businessObject.elements, "eDisposition.18") == null) {
        if (isRequiredStateElement("eDisposition.18") == true) {
            ErrorList.push("eDisposition.18 required");
            V3XMLArray.push("<eDisposition.18>" + v3NOT_RECORDED + "</eDisposition.18>");
            }
        else {
            V3XMLArray.push("<eDisposition.18>" + v3NOT_REPORTING + "</eDisposition.18>");
            }
    }
    else {
        V3XMLArray.push("<eDisposition.18>" + getdAgencyValue(businessObject.elements, "eDisposition.18") + "</eDisposition.18>")
        
    };



    if (getdAgencyValue(businessObject.elements, "eDisposition.19") == null) {
        if (isRequiredStateElement("eDisposition.19") == true) {
            ErrorList.push("eDisposition.19 required");
            V3XMLArray.push("<eDisposition.19>" + v3NOT_RECORDED + "</eDisposition.19>");
            V2XMLArray.push("<E20_15>" + v2NOT_RECORDED + "</E20_15>")
        }
        else {
            V3XMLArray.push("<eDisposition.19>" + v3NOT_REPORTING + "</eDisposition.19>");
            V2XMLArray.push("<E20_15>" + v2NOT_REPORTING + "</E20_15>")
        }
    }
    else {
        V3XMLArray.push("<eDisposition.19>" + getdAgencyValue(businessObject.elements, "eDisposition.19") + "</eDisposition.19>")
        V2XMLArray.push("<E20_15>" + value + "</E20_15>")
    };


    if (getdAgencyValue(businessObject.elements, "eDisposition.20") == null) {
        if (isRequiredStateElement("eDisposition.20") == true) {
            ErrorList.push("eDisposition.20 required");
            V3XMLArray.push("<eDisposition.20>" + v3NOT_RECORDED + "</eDisposition.20>");
            V2XMLArray.push("<E20_16>" + v2NOT_RECORDED + "</E20_16>")
        }
        else {
            V3XMLArray.push("<eDisposition.20>" + v3NOT_REPORTING + "</eDisposition.20>");
            V2XMLArray.push("<E20_16>" + v2NOT_REPORTING + "</E20_16>")
        }
    }
    else {
        V3XMLArray.push("<eDisposition.20>" + getdAgencyValue(businessObject.elements, "eDisposition.20") + "</eDisposition.20>")
        V2XMLArray.push("<E20_16>" + value + "</E20_16>")
    };


    if (getdAgencyValue(businessObject.elements, "eDisposition.21") == null) {
        if (isRequiredStateElement("eDisposition.21") == true) {
            ErrorList.push("eDisposition.21 required");
            V3XMLArray.push("<eDisposition.21>" + v3NOT_RECORDED + "</eDisposition.21>");
            V2XMLArray.push("<E21_17>" + v2NOT_RECORDED + "</E21_17>")
        }
        else {
            V3XMLArray.push("<eDisposition.21>" + v3NOT_REPORTING + "</eDisposition.21>");
            V2XMLArray.push("<E21_17>" + v2NOT_REPORTING + "</E21_17>")
        }
    }
    else {
        V3XMLArray.push("<eDisposition.21>" + getdAgencyValue(businessObject.elements, "eDisposition.21") + "</eDisposition.21>")
        V2XMLArray.push("<E21_17>" + value + "</E21_17>")
    };



    if (getdAgencyValue(businessObject.elements, "eDisposition.22") == null) {
        if (isRequiredStateElement("eDisposition.22") == true) {
            ErrorList.push("eDisposition.22 required");
            V3XMLArray.push("<eDisposition.22>" + v3NOT_RECORDED + "</eDisposition.22>");
        }
        else {
           V3XMLArray.push("<eDisposition.22>" + v3NOT_REPORTING + "</eDisposition.22>");
        }
    }
    else {
        V3XMLArray.push("<eDisposition.22>" + getdAgencyValue(businessObject.elements, "eDisposition.22") + "</eDisposition.22>")
    };

    if (getdAgencyValue(businessObject.elements, "eDisposition.23") == null) {
        if (isRequiredStateElement("eDisposition.23") == true) {
            ErrorList.push("eDisposition.23 required");
            V3XMLArray.push("<eDisposition.23>" + v3NOT_RECORDED + "</eDisposition.23>");
        }
        else {
            V3XMLArray.push("<eDisposition.23>" + v3NOT_REPORTING + "</eDisposition.23>");
        }
    }
    else {
        V3XMLArray.push("<eDisposition.23>" + getdAgencyValue(businessObject.elements, "eDisposition.23") + "</eDisposition.23>")
    };

    if (getdAgencyValue(businessObject.elements, "eDisposition.24") == null) {
        if (isRequiredStateElement("eDisposition.24") == true) {
            ErrorList.push("eDisposition.24 required");
            V3XMLArray.push("<eDisposition.24>" + v3NOT_RECORDED + "</eDisposition.24>");
        }
        else {
            V3XMLArray.push("<eDisposition.24>" + v3NOT_REPORTING + "</eDisposition.24>");
        }
    }
    else {
        V3XMLArray.push("<eDisposition.24>" + getdAgencyValue(businessObject.elements, "eDisposition.24") + "</eDisposition.24>")
    };

    if (getdAgencyValue(businessObject.elements, "eDisposition.25") == null) {
        if (isRequiredStateElement("eDisposition.25") == true) {
            ErrorList.push("eDisposition.25 required");
            V3XMLArray.push("<eDisposition.25>" + v3NOT_RECORDED + "</eDisposition.25>");
        }
        else {
            V3XMLArray.push("<eDisposition.25>" + v3NOT_REPORTING + "</eDisposition.25>");
        }
    }
    else {
        V3XMLArray.push("<eDisposition.25>" + getdAgencyValue(businessObject.elements, "eDisposition.25") + "</eDisposition.25>")
    };

    if (getdAgencyValue(businessObject.elements, "eDisposition.26") == null) {
            V3XMLArray.push("<eDisposition.23>" + null + "</eDisposition.23>");

    }
    else {
        V3XMLArray.push("<eDisposition.26>" + getdAgencyValue(businessObject.elements, "eDisposition.26") + "</eDisposition.26>")
    };


    V3XMLArray.push("</eDisposition.ShockGroup>")

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