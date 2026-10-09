import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    standalone: false,
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'sitereg-update-review-container',
    templateUrl: './msp-direct-update-review-container.component.html',
    styleUrls: ['./msp-direct-update-review-container.component.scss'],
})
export class MspDirectUpdateReviewContainerComponent{
    header: string | null;
    @Input() redirectPath: string | null;
    @Input() sectionItems: any | null;

    constructor(private router: Router) {}

    redirect(routeName: string) {
        this.router.navigate([routeName]);
    }
}
