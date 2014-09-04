/*
* This jsfl will print the positions of all items selected,
* in Array format.
*/
fl.outputPanel.clear();

var doc = fl.getDocumentDOM();
var selection = doc.selection;
fl.trace("There're " + selection.length + " elements.\n");

for (var i = 0; i < selection.length; i++) {
    var item = selection[i];
    var info = "[" + Math.round(item.x) + ", " + Math.round(item.y) + "]";
    if (i < selection.length - 1) info += ",";
    fl.trace(info);
}
