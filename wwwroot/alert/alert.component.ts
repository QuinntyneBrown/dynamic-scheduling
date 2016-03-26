require("./alert.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { AlertActionCreator } from "./alert.actions";

@Component({
    templateUrl: "wwwroot/alert/alert.component.html",
	styleUrls: ["wwwroot/alert/alert.component.css"],
    selector: "alert",
    providers: ["alertActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent {
    constructor(private alertActionCreator: AlertActionCreator) { }
  
}
