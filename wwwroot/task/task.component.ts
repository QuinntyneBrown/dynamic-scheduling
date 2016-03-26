require("./task.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { TaskActionCreator } from "./task.actions";

@Component({
    templateUrl: "wwwroot/task/task.component.html",
	styleUrls: ["wwwroot/task/task.component.css"],
    selector: "task",
    providers: ["taskActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent {
    constructor(private taskActionCreator: TaskActionCreator) { }
  
}
