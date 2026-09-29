import { TestBed } from '@angular/core/testing';
import { MspRegisterDataService } from './msp-register-data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MspRegisterDataService', () => {

    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, RouterTestingModule],
        }
    ));

    it('should be created', () => {
        const service: MspRegisterDataService = TestBed.get(
            MspRegisterDataService
        );
        expect(service).toBeTruthy();
    });
});
