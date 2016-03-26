require("./inventory-types-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./inventory-type.actions";
import { pluck } from "../core/pluck";
import { InventoryType } from "./inventory-type.model";

@Component({
    routes: ["/admin/inventorytypes","/admin/inventorytype/edit/:inventoryTypeId"],
    templateUrl: "wwwroot/inventory-type/inventory-types-container.component.html",
    styleUrls: ["wwwroot/inventory-type/inventory-types-container.component.css"],
    selector: "inventory-types-container",
    providers: ["$location","$routeParams","inventoryTypeActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "inventoryTypeActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, inventoryTypeActionCreator: actions.InventoryTypeActionCreator) => {
    var inventoryTypeId = $route.current.params.inventoryTypeId;
    var promises = [invokeAsync(inventoryTypeActionCreator.all)];
    if (inventoryTypeId) { promises.push(invokeAsync({ action: inventoryTypeActionCreator.getById, params: { id: inventoryTypeId } })) };
    return $q.all(promises);
}])
export class InventoryTypesContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private inventoryTypeActionCreator: actions.InventoryTypeActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.inventoryTypes;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentInventoryTypeAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/inventorytypes");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentInventoryTypeAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/inventorytype/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveInventoryTypeAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["inventoryTypeId"]), items: this.entities }) as InventoryType;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/inventorytypes"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["inventoryTypeId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["inventoryTypeId"]), items: this.entities }) as InventoryType;
        } else {
            this.entity = new InventoryType();
        }
    }

    edit = entity => this.inventoryTypeActionCreator.edit(entity);
    remove = entity => this.inventoryTypeActionCreator.remove(entity);
    create = entity => this.inventoryTypeActionCreator.create();
    addOrUpdate = options => this.inventoryTypeActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
