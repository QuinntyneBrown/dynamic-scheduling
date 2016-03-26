require("../core/core.module");

import { ReportEditorComponent } from "./report-editor.component";
import { ReportListComponent } from "./report-list.component";
import { ReportComponent } from "./report.component";
import { ReportsContainerComponent } from "./reports-container.component";
import { ReportActionCreator } from "./report.actions";
import { ReportService } from "./report.service";
import *  as reducers from "./report.reducers";

var app = (<any>angular.module("app.report", [
    "app.core"    
]));

app.service("reportActionCreator",["$location","dispatcher","reportService","guid",ReportActionCreator]);
app.service("reportService",["$q","apiEndpoint","fetch",ReportService]);
app.component(ReportEditorComponent);
app.component(ReportListComponent);
app.component(ReportComponent);
app.component(ReportsContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
