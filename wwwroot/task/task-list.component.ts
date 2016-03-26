require("./task-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/task/task-list.component.html",
	styleUrls: ["wwwroot/task/task-list.component.css"],
    selector: "task-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent {
    constructor() { }     
}
