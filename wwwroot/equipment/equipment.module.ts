require("../core/core.module");

import { EquipmentEditorComponent } from "./equipment-editor.component";
import { EquipmentListComponent } from "./equipment-list.component";
import { EquipmentComponent } from "./equipment.component";
import { EquipmentsContainerComponent } from "./equipments-container.component";
import { EquipmentActionCreator } from "./equipment.actions";
import { EquipmentService } from "./equipment.service";
import *  as reducers from "./equipment.reducers";

var app = (<any>angular.module("app.equipment", [
    "app.core"    
]));

app.service("equipmentActionCreator",["$location","dispatcher","equipmentService","guid",EquipmentActionCreator]);
app.service("equipmentService",["$q","apiEndpoint","fetch",EquipmentService]);
app.component(EquipmentEditorComponent);
app.component(EquipmentListComponent);
app.component(EquipmentComponent);
app.component(EquipmentsContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
