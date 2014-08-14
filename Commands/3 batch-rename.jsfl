fl.outputPanel.clear();

var doc = fl.getDocumentDOM();
var selection = doc.selection;
fl.trace("There're " + selection.length + " elements");

var uxi = doc.xmlPanel(fl.configURI + "Commands/3 rename.xml");
var prefix = "mc_";
var start = 0;
if (uxi.dismiss == "accept") {
    prefix = uxi.prefixName;
    start = parseInt(uxi.start);
}

if (uxi.order == "reverse") {
    selection.reverse();
}

for (var i = 0; i < selection.length; i++) {
    selection[i].name = prefix + (i + start);
}
