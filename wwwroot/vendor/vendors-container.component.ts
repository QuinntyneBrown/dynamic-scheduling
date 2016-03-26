require("./vendors-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./vendor.actions";
import { pluck } from "../core/pluck";
import { Vendor } from "./vendor.model";

@Component({
    routes: ["/admin/vendors","/admin/vendor/edit/:vendorId"],
    templateUrl: "wwwroot/vendor/vendors-container.component.html",
    styleUrls: ["wwwroot/vendor/vendors-container.component.css"],
    selector: "vendors-container",
    providers: ["$location","$routeParams","vendorActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "vendorActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, vendorActionCreator: actions.VendorActionCreator) => {
    var vendorId = $route.current.params.vendorId;
    var promises = [invokeAsync(vendorActionCreator.all)];
    if (vendorId) { promises.push(invokeAsync({ action: vendorActionCreator.getById, params: { id: vendorId } })) };
    return $q.all(promises);
}])
export class VendorsContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private vendorActionCreator: actions.VendorActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.vendors;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentVendorAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/vendors");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentVendorAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/vendor/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveVendorAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["vendorId"]), items: this.entities }) as Vendor;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/vendors"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["vendorId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["vendorId"]), items: this.entities }) as Vendor;
        } else {
            this.entity = new Vendor();
        }
    }

    edit = entity => this.vendorActionCreator.edit(entity);
    remove = entity => this.vendorActionCreator.remove(entity);
    create = entity => this.vendorActionCreator.create();
    addOrUpdate = options => this.vendorActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
