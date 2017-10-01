import { TestBed, async, inject } from '@angular/core/testing';

import { DataService } from './data.service';
import { MockBackend } from '@angular/http/testing';

import {
    HttpModule,
    Http,
    Response,
    ResponseOptions,
    XHRBackend,
    ConnectionBackend,
    RequestOptions
} from '@angular/http';

describe('DataService', () => {
    let service;

    beforeEach(() => TestBed.configureTestingModule({
        providers: [ DataService, Http, ConnectionBackend, RequestOptions, XHRBackend, HttpModule ]
      }));

      beforeEach(inject([DataService], s => {
        service = s;
      }));

      it('should return an array of habitants from Brastlewark', inject([XHRBackend], (mockBackend) => {
        const mockResponse = {
            data: [
              { id: 0, name: 'Video 0' },
              { id: 1, name: 'Video 1' },
              { id: 2, name: 'Video 2' },
              { id: 3, name: 'Video 3' },
            ]
        };
        mockBackend.connections.subscribe(
            (connection) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(mockResponse)
                })));
            }
        );
        mockBackend.getData().subscribe(
            (habitants) => {
                expect(habitants.length).toBe(4);
                expect(habitants[0].id).toEqual(0);
            }
        );
      }));
});
