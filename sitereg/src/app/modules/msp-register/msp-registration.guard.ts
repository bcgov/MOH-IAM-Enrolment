import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MspRegistrationService } from './msp-registration.service';
import { environment } from './../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class MspRegistrationGuard implements CanActivateChild {
    constructor(
        private registrationService: MspRegistrationService,
        private router: Router
    ) {}

    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        // console.log(
        //     '%c CanActivateChild: %o %o',
        //     'color:green',
        //     this.router.url,
        //     state.url
        // );

        // // REMOVEME - debug only
        // if (environment.bypassGuards) return true;
        // console.log('%o: route guards', this.registrationService.registrationItems);
        return this.registrationService.moveNext(this.router.url, state.url);
    }
}
