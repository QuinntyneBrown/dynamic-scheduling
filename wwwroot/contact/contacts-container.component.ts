require("./contacts-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./contact.actions";
import { pluck } from "../core/pluck";
import { Contact } from "./contact.model";

@Component({
    routes: ["/admin/contacts","/admin/contact/edit/:contactId"],
    templateUrl: "wwwroot/contact/contacts-container.component.html",
    styleUrls: ["wwwroot/contact/contacts-container.component.css"],
    selector: "contacts-container",
    providers: ["$location","$routeParams","contactActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "contactActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, contactActionCreator: actions.ContactActionCreator) => {
    var contactId = $route.current.params.contactId;
    var promises = [invokeAsync(contactActionCreator.all)];
    if (contactId) { promises.push(invokeAsync({ action: contactActionCreator.getById, params: { id: contactId } })) };
    return $q.all(promises);
}])
export class ContactsContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private contactActionCreator: actions.ContactActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.contacts;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentContactAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/contacts");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentContactAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/contact/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveContactAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["contactId"]), items: this.entities }) as Contact;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/contacts"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["contactId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["contactId"]), items: this.entities }) as Contact;
        } else {
            this.entity = new Contact();
        }
    }

    edit = entity => this.contactActionCreator.edit(entity);
    remove = entity => this.contactActionCreator.remove(entity);
    create = entity => this.contactActionCreator.create();
    addOrUpdate = options => this.contactActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
