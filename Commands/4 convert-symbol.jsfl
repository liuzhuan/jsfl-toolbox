fl.outputPanel.clear();

var doc = fl.getDocumentDOM();
var selection = doc.selection;
doc.selectNone();
fl.trace(selection.length);

var uxi = doc.xmlPanel(fl.configURI + "Commands/4 convertSymbol.xml");
var prefix = "mc_";
var start = 0;
if (uxi.dismiss == "accept") {
    prefix = uxi.prefixName;
    start = parseInt(uxi.start);
}

selection.forEach(function(item, idx, arr){
    doc.selectNone();
    doc.selection = [selection[idx]];
    doc.convertToSymbol("movie clip", prefix+(start+idx), "center");
});
