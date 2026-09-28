import { TestBed } from '@angular/core/testing';
import { LoggerService } from './logger.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoggerService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, RouterTestingModule],
        }
    ));

    it('should be created', () => {
        const service: LoggerService = TestBed.get(LoggerService);
        expect(service).toBeTruthy();
    });
});
