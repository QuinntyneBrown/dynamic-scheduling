require("../core/core.module");

import { OrganizationEditorComponent } from "./organization-editor.component";
import { OrganizationListComponent } from "./organization-list.component";
import { OrganizationComponent } from "./organization.component";
import { OrganizationsContainerComponent } from "./organizations-container.component";
import { OrganizationActionCreator } from "./organization.actions";
import { OrganizationService } from "./organization.service";
import *  as reducers from "./organization.reducers";

var app = (<any>angular.module("app.organization", [
    "app.core"    
]));

app.service("organizationActionCreator",["$location","dispatcher","organizationService","guid",OrganizationActionCreator]);
app.service("organizationService",["$q","apiEndpoint","fetch",OrganizationService]);
app.component(OrganizationEditorComponent);
app.component(OrganizationListComponent);
app.component(OrganizationComponent);
app.component(OrganizationsContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
