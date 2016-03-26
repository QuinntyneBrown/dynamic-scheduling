require("./inventorys-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./inventory.actions";
import { pluck } from "../core/pluck";
import { Inventory } from "./inventory.model";

@Component({
    routes: ["/admin/inventorys","/admin/inventory/edit/:inventoryId"],
    templateUrl: "wwwroot/inventory/inventorys-container.component.html",
    styleUrls: ["wwwroot/inventory/inventorys-container.component.css"],
    selector: "inventorys-container",
    providers: ["$location","$routeParams","inventoryActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "inventoryActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, inventoryActionCreator: actions.InventoryActionCreator) => {
    var inventoryId = $route.current.params.inventoryId;
    var promises = [invokeAsync(inventoryActionCreator.all)];
    if (inventoryId) { promises.push(invokeAsync({ action: inventoryActionCreator.getById, params: { id: inventoryId } })) };
    return $q.all(promises);
}])
export class InventorysContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private inventoryActionCreator: actions.InventoryActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.inventorys;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentInventoryAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/inventorys");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentInventoryAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/inventory/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveInventoryAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["inventoryId"]), items: this.entities }) as Inventory;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/inventorys"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["inventoryId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["inventoryId"]), items: this.entities }) as Inventory;
        } else {
            this.entity = new Inventory();
        }
    }

    edit = entity => this.inventoryActionCreator.edit(entity);
    remove = entity => this.inventoryActionCreator.remove(entity);
    create = entity => this.inventoryActionCreator.create();
    addOrUpdate = options => this.inventoryActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
