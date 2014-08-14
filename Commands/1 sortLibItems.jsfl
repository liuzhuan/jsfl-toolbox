fl.outputPanel.clear();
 
var doc = fl.getDocumentDOM();
var lib = doc.library;
var tables = {
    "bitmap":"img",
    "font":"font",
    "movie clip":"mc",
    "graphic":"gra",
    "button":"btn"
};
 
for each(var folder in tables) {
    lib.newFolder(folder);
}
 
var items = lib.items;
for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var type = item.itemType;
    var name = item.name;

    var folderToMove = tables[type];
    lib.moveToFolder(folderToMove, name);
}
