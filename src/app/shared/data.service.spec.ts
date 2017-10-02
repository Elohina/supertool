import { TestBed, async, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';

import { DataService } from './data.service';
import { DataStore } from './data-store.service';
import { AppConfig } from "../app.config";

describe('DataService', () => {

  class MockConfig {
    static API_URL = 'https://test/data.json';
  }

  let mockConfig;
  beforeEach(async(() => {
    mockConfig =  new MockConfig();
    TestBed.configureTestingModule({
      declarations: [

      ],
      imports: [HttpModule],
      providers: [
        {provide: XHRBackend, useClass: MockBackend},
        {provide: AppConfig, useValue: mockConfig},
        DataService,
        DataStore
      ]
    }).compileComponents();
  }));

  it('should initialize cities and habitants', inject([XHRBackend, DataService, DataStore], (mockBackend, dataService, dataStore) => {
    const mockResponse = {
      "city1": [
        { id: 0, name: 'Person 0' },
        { id: 1, name: 'Person 1' },
        { id: 2, name: 'Person 2' },
        { id: 3, name: 'Person 3' },
      ]
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });

    dataService.getData().subscribe(
        (data: any) => {
          expect(dataStore._cities).toEqual(['city1']);
          let habitants = dataStore.getCountriesHabitants('city1');
          expect(habitants).not.toBe(null);
          expect(habitants[0].name).toBe('Person 0');
        }
    );
  }));
});
