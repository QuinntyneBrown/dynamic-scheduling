require("./equipments-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./equipment.actions";
import { pluck } from "../core/pluck";
import { Equipment } from "./equipment.model";

@Component({
    routes: ["/admin/equipments","/admin/equipment/edit/:equipmentId"],
    templateUrl: "wwwroot/equipment/equipments-container.component.html",
    styleUrls: ["wwwroot/equipment/equipments-container.component.css"],
    selector: "equipments-container",
    providers: ["$location","$routeParams","equipmentActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "equipmentActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, equipmentActionCreator: actions.EquipmentActionCreator) => {
    var equipmentId = $route.current.params.equipmentId;
    var promises = [invokeAsync(equipmentActionCreator.all)];
    if (equipmentId) { promises.push(invokeAsync({ action: equipmentActionCreator.getById, params: { id: equipmentId } })) };
    return $q.all(promises);
}])
export class EquipmentsContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private equipmentActionCreator: actions.EquipmentActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.equipments;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentEquipmentAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/equipments");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentEquipmentAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/equipment/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveEquipmentAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["equipmentId"]), items: this.entities }) as Equipment;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/equipments"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["equipmentId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["equipmentId"]), items: this.entities }) as Equipment;
        } else {
            this.entity = new Equipment();
        }
    }

    edit = entity => this.equipmentActionCreator.edit(entity);
    remove = entity => this.equipmentActionCreator.remove(entity);
    create = entity => this.equipmentActionCreator.create();
    addOrUpdate = options => this.equipmentActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
