// to run this script succefully, you should 
// have swfobject.js inside Commands direcotry
fl.outputPanel.clear();
var doc = fl.getDocumentDOM();
var configURI = fl.configURI;
var swfobject = configURI + "Commands/swfobject.js";
var swf = doc.getSWFPathFromProfile();
var swfPath = swf.substr(0, swf.lastIndexOf("/")+1);
FLfile.copy(swfobject, swfPath + "swfobject.js");
