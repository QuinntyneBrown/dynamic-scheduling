require("../core/core.module");

import { ContactEditorComponent } from "./contact-editor.component";
import { ContactListComponent } from "./contact-list.component";
import { ContactComponent } from "./contact.component";
import { ContactsContainerComponent } from "./contacts-container.component";
import { ContactActionCreator } from "./contact.actions";
import { ContactService } from "./contact.service";
import *  as reducers from "./contact.reducers";

var app = (<any>angular.module("app.contact", [
    "app.core"    
]));

app.service("contactActionCreator",["$location","dispatcher","contactService","guid",ContactActionCreator]);
app.service("contactService",["$q","apiEndpoint","fetch",ContactService]);
app.component(ContactEditorComponent);
app.component(ContactListComponent);
app.component(ContactComponent);
app.component(ContactsContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
