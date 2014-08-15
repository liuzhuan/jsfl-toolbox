fl.outputPanel.clear();
var str = "";
for each(var doc in fl.documents) {
    str += doc.name + " is publishing...\n";
    doc.publish();
}
fl.trace(str);
fl.trace("All documents are published.");
