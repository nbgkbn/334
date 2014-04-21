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


var seteExam = function (businessObject) {
    alert("NEED v2 NOTS");

    console.log(isDefined("eExam"));  // if Not, set all to NOT_APPLICABLE
    return;
    var _retArray = [];

    console.log(businessObject);

    V3XMLArray.push("<eExam>")

    if (getdAgencyValue(businessObject.elements, "eExam.01") == null) {
        if (isRequiredStateElement("eExam.01") == true) {
            ErrorList.push("eExam.01 required");
            V3XMLArray.push("<eExam.01>" + v3NOT_RECORDED + "</eExam.01>");
            V2XMLArray.push("<E16_01>" + v2NOT_RECORDED + "</E16_01>")
        }
        else {
            V3XMLArray.push("<eExam.01>" + v3NOT_REPORTING + "</eExam.01>");
            V2XMLArray.push("<E16_01>" + v2NOT_REPORTING + "</E16_01>")
        }
    }
    else {
        V3XMLArray.push("<eExam.01>" + getdAgencyValue(businessObject.elements, "eExam.01") + "</eExam.01>")
        V2XMLArray.push("<E16_01>" + value + "</E16_01>")
    };



    if (getdAgencyValue(businessObject.elements, "eExam.02") == null) {
        if (isRequiredStateElement("eExam.02") == true) {
            ErrorList.push("eExam.02 required");
            V3XMLArray.push("<eExam.02>" + v3NOT_RECORDED + "</eExam.02>");
            V2XMLArray.push("<E16_02>" + v2NOT_RECORDED + "</E16_02>")
        }
        else {
            V3XMLArray.push("<eExam.02>" + v3NOT_REPORTING + "</eExam.02>");
            V2XMLArray.push("<E16_02>" + v2NOT_REPORTING + "</E16_02>")
        }
    }
    else {
        V3XMLArray.push("<eExam.02>" + getdAgencyValue(businessObject.elements, "eExam.02") + "</eExam.02>")
        V2XMLArray.push("<E16_02>" + value + "</E16_02>")
    };
};
var ExamAssessmentGroup = function(groupObject)
{
    var _retArray = [];

    if (getdAgencyValue(groupObject.elements, "eExam.03") == null) {
        V3XMLArray.push("<eExam.03>" + null + "</eExam.03>");
        V2XMLArray.push("<E16_03>" + value + "</E16_03>")
    }
    else 
    {
        V3XMLArray.push("<eExam.03>" + getdAgencyValue(groupObject.elements, "eExam.03") + "</eExam.03>")
        V2XMLArray.push("<E16_03>" + getdAgencyValue(businegroupObjectssObject.elements, "eExam.03") + "</E16_03>")
    };

    alert("PN");

    if (getdAgencyValue(businessObject.elements, "eExam.04") == null) {
        V2XMLArray.push("<E16_04>" + value + "</E16_04>")
    }
    else {
        V3XMLArray.push("<eExam.04>" + getdAgencyValue(businessObject.elements, "eExam.04") + "</eExam.04>")
        V2XMLArray.push("<E16_04>" + getdAgencyValue(businegroupObjectssObject.elements, "eExam.04") + "</E16_04>")
    };

    if (getdAgencyValue(businessObject.elements, "eExam.05") == null) {
        V2XMLArray.push("<E16_05>" + value + "</E16_05>")
    }
    else {
        V3XMLArray.push("<eExam.05>" + getdAgencyValue(businessObject.elements, "eExam.05") + "</eExam.05>")
        V2XMLArray.push("<E16_05>" + getdAgencyValue(businegroupObjectssObject.elements, "eExam.05") + "</E16_05>")
    };

    if (getdAgencyValue(businessObject.elements, "eExam.06") == null) {
        V2XMLArray.push("<E16_06>" + value + "</E16_06>")
    }
    else {
        V3XMLArray.push("<eExam.06>" + getdAgencyValue(businessObject.elements, "eExam.06") + "</eExam.06>");
    };

    if (getdAgencyValue(businessObject.elements, "eExam.07") == null) {
        V2XMLArray.push("<E16_06>" + value + "</E16_06>")
    }
    else {
        V3XMLArray.push("<eExam.07>" + getdAgencyValue(businessObject.elements, "eExam.07") + "</eExam.07>")
        V2XMLArray.push("<E16_06>" + getdAgencyValue(businegroupObjectssObject.elements, "eExam.07") + "</E16_06>")
    };

    if (getdAgencyValue(businessObject.elements, "eExam.08") == null) {
        V2XMLArray.push("<E16_07>" + value + "</E16_07>")
    }
    else {
        V3XMLArray.push("<eExam.08>" + getdAgencyValue(businessObject.elements, "eExam.08") + "</eExam.08>")
        V2XMLArray.push("<E16_07>" + getdAgencyValue(businegroupObjectssObject.elements, "eExam.08") + "</E16_07>")
    };

    if (getdAgencyValue(businessObject.elements, "eExam.09") == null) {
        V2XMLArray.push("<E16_08>" + value + "</E16_08>")
    }
    else {
        V3XMLArray.push("<eExam.09>" + getdAgencyValue(businessObject.elements, "eExam.09") + "</eExam.09>")
        V2XMLArray.push("<E16_08>" + getdAgencyValue(businegroupObjectssObject.elements, "eExam.09") + "</E16_08>")
    };


    if (getdAgencyValue(businessObject.elements, "eExam.10") == null) {
        V3XMLArray.push("<eExam.10>" +null + "</eExam.10>")
    }
    else {
        V3XMLArray.push("<eExam.10>" + getdAgencyValue(businessObject.elements, "eExam.10") + "</eExam.10>")
    };


    if (getdAgencyValue(businessObject.elements, "eExam.11") == null) {
        V3XMLArray.push("<eExam.11>" + null + "</eExam.11>");
        V2XMLArray.push("<E16_09>" + null + "</E16_09>")
    }
    else {
        V3XMLArray.push("<eExam.11>" + getdAgencyValue(businessObject.elements, "eExam.11") + "</eExam.11>")
        V2XMLArray.push("<E16_09>" + value + "</E16_09>")
    };

    if (getdAgencyValue(businessObject.elements, "eExam.12") == null) {
        V3XMLArray.push("<eExam.12>" + null + "</eExam.12>");
        V2XMLArray.push("<E16_13>" + null + "</E16_13>")
    }
    else {
        V3XMLArray.push("<eExam.12>" + getdAgencyValue(businessObject.elements, "eExam.12") + "</eExam.12>")
        V2XMLArray.push("<E16_13>" + value + "</E16_13>")
    };

    if (getdAgencyValue(businessObject.elements, "eExam.12") == null) {
        V3XMLArray.push("<eExam.12>" + null + "</eExam.12>");      
    }
    else {
        V3XMLArray.push("<eExam.12>" + getdAgencyValue(businessObject.elements, "eExam.12") + "</eExam.12>")
    };

    if (getdAgencyValue(businessObject.elements, "eExam.14") == null) {
        V3XMLArray.push("<eExam.14>" + null + "</eExam.14>");
        V2XMLArray.push("<E16_14>" + null + "</E16_14>")
    }
    else {
        V3XMLArray.push("<eExam.14>" + getdAgencyValue(businessObject.elements, "eExam.14") + "</eExam.14>")
        V2XMLArray.push("<E16_14>" + value + "</E16_14>")
    };

    if (getdAgencyValue(businessObject.elements, "eExam.15") == null) {
        V3XMLArray.push("<eExam.15>" + null + "</eExam.15>");
    }
    else {
        V3XMLArray.push("<eExam.15>" + getdAgencyValue(businessObject.elements, "eExam.15") + "</eExam.15>")
    };

    if (getdAgencyValue(businessObject.elements, "eExam.16") == null) {
        V3XMLArray.push("<eExam.16>" + null + "</eExam.16>");
        V2XMLArray.push("<E16_17>" + null + "</E16_17>")
    }
    else {
        V3XMLArray.push("<eExam.16>" + getdAgencyValue(businessObject.elements, "eExam.16") + "</eExam.16>")
        V2XMLArray.push("<E16_17>" + value + "</E16_17>")
    };

    if (getdAgencyValue(businessObject.elements, "eExam.17") == null) {
        V3XMLArray.push("<eExam.17>" + null + "</eExam.17>");
    }
    else {
        V3XMLArray.push("<eExam.17>" + getdAgencyValue(businessObject.elements, "eExam.17") + "</eExam.17>")
    };


    if (getdAgencyValue(businessObject.elements, "eExam.18") == null) {
        V3XMLArray.push("<eExam.18>" + null + "</eExam.18>");
        V2XMLArray.push("<E16_21>" + null + "</E16_21>")
    }
    else {
        V3XMLArray.push("<eExam.18>" + getdAgencyValue(businessObject.elements, "eExam.18") + "</eExam.18>")
        V2XMLArray.push("<E16_21>" + value + "</E16_21>")
    };


    if (getdAgencyValue(businessObject.elements, "eExam.19") == null) {
        V3XMLArray.push("<eExam.19>" + null + "</eExam.19>");
        V2XMLArray.push("<E16_23>" + null + "</E16_23>")
    }
    else {
        V3XMLArray.push("<eExam.19>" + getdAgencyValue(businessObject.elements, "eExam.19") + "</eExam.19>")
        V2XMLArray.push("<E16_23>" + value + "</E16_23>")
    };

    if (getdAgencyValue(businessObject.elements, "eExam.20") == null) {
        V3XMLArray.push("<eExam.20>" + null + "</eExam.20>");
        V2XMLArray.push("<E16_24>" + null + "</E16_24>")
    }
    else {
        V3XMLArray.push("<eExam.20>" + getdAgencyValue(businessObject.elements, "eExam.20") + "</eExam.20>")
        V2XMLArray.push("<E16_24>" + value + "</E16_24>")
    };

    V3XMLArray.push("</eExam.ShockGroup>")

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
© 2014 Microsoft Terms Privacy & cookies Developers English (United States)
