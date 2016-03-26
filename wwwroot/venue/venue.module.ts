require("../core/core.module");

import { VenueEditorComponent } from "./venue-editor.component";
import { VenueListComponent } from "./venue-list.component";
import { VenueComponent } from "./venue.component";
import { VenuesContainerComponent } from "./venues-container.component";
import { VenueActionCreator } from "./venue.actions";
import { VenueService } from "./venue.service";
import *  as reducers from "./venue.reducers";

var app = (<any>angular.module("app.venue", [
    "app.core"    
]));

app.service("venueActionCreator",["$location","dispatcher","venueService","guid",VenueActionCreator]);
app.service("venueService",["$q","apiEndpoint","fetch",VenueService]);
app.component(VenueEditorComponent);
app.component(VenueListComponent);
app.component(VenueComponent);
app.component(VenuesContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
