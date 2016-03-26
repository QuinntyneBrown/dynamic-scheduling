require("../core/core.module");

import { InventoryEditorComponent } from "./inventory-editor.component";
import { InventoryListComponent } from "./inventory-list.component";
import { InventoryComponent } from "./inventory.component";
import { InventorysContainerComponent } from "./inventorys-container.component";
import { InventoryActionCreator } from "./inventory.actions";
import { InventoryService } from "./inventory.service";
import *  as reducers from "./inventory.reducers";

var app = (<any>angular.module("app.inventory", [
    "app.core"    
]));

app.service("inventoryActionCreator",["$location","dispatcher","inventoryService","guid",InventoryActionCreator]);
app.service("inventoryService",["$q","apiEndpoint","fetch",InventoryService]);
app.component(InventoryEditorComponent);
app.component(InventoryListComponent);
app.component(InventoryComponent);
app.component(InventorysContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
