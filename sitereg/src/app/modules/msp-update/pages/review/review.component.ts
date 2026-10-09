import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateStateService } from '../../services/update.state.service';
import { ROUTES_UPDATE } from '../../routing/routes.constants';
import { LoggerService } from '../../../../shared/services/logger.service';
import { GlobalConfigService } from '../../../../shared/services/global-config.service';
import { MspDirectUpdateProgressService } from '../../services/progress.service';
import { funcRemoveStrings } from '../../../msp-register/constants';

@Component({
    standalone: false,
    selector: 'sitereg-msp-update-review',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.scss'],
})
export class MspUpdateReviewComponent implements OnInit {

  get componentInfo(): string {
    return (
      `${funcRemoveStrings(
        ['MspDirectUpdate', 'Component'],
        this.constructor.name
      ).toUpperCase()} :` + ` ${this.globalConfigSvc.applicationId}`
    );
  }

  constructor(
    private router: Router,
    private progressService: MspDirectUpdateProgressService,
    private loggerSvc: LoggerService,
    private globalConfigSvc: GlobalConfigService,
    public updateStateService: UpdateStateService
  ) {}

  ngOnInit() {
    this.progressService.setPageIncomplete();
  }

  continue() {
    // splunk-log
    this.loggerSvc.logNavigation(
      this.constructor.name,
      `Valid Data - Continue button clicked. ${
      this.globalConfigSvc.applicationId
      }`
    );
    this.progressService.setPageComplete();
    this.router.navigate([ROUTES_UPDATE.SUBMIT.fullpath]);
  }
}
