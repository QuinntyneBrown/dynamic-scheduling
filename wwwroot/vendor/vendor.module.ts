require("../core/core.module");

import { VendorEditorComponent } from "./vendor-editor.component";
import { VendorListComponent } from "./vendor-list.component";
import { VendorComponent } from "./vendor.component";
import { VendorsContainerComponent } from "./vendors-container.component";
import { VendorActionCreator } from "./vendor.actions";
import { VendorService } from "./vendor.service";
import *  as reducers from "./vendor.reducers";

var app = (<any>angular.module("app.vendor", [
    "app.core"    
]));

app.service("vendorActionCreator",["$location","dispatcher","vendorService","guid",VendorActionCreator]);
app.service("vendorService",["$q","apiEndpoint","fetch",VendorService]);
app.component(VendorEditorComponent);
app.component(VendorListComponent);
app.component(VendorComponent);
app.component(VendorsContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
