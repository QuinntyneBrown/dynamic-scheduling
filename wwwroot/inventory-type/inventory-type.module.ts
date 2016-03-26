require("../core/core.module");

import { InventoryTypeEditorComponent } from "./inventory-type-editor.component";
import { InventoryTypeListComponent } from "./inventory-type-list.component";
import { InventoryTypeComponent } from "./inventory-type.component";
import { InventoryTypesContainerComponent } from "./inventory-types-container.component";
import { InventoryTypeActionCreator } from "./inventory-type.actions";
import { InventoryTypeService } from "./inventory-type.service";
import *  as reducers from "./inventory-type.reducers";

var app = (<any>angular.module("app.inventoryType", [
    "app.core"    
]));

app.service("inventoryTypeActionCreator",["$location","dispatcher","inventoryTypeService","guid",InventoryTypeActionCreator]);
app.service("inventoryTypeService",["$q","apiEndpoint","fetch",InventoryTypeService]);
app.component(InventoryTypeEditorComponent);
app.component(InventoryTypeListComponent);
app.component(InventoryTypeComponent);
app.component(InventoryTypesContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
