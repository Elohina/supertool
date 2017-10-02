import { TestBed, async } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MockBackend } from '@angular/http/testing';

import { AppComponent } from './app.component';
import { DataService } from './shared/data.service';
import { HabitantsModule } from './habitants/habitants.module';
import { MatSelectModule,
  MatInputModule,
  MatCardModule,
  MatGridListModule,
  MatButtonModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatChipsModule } from '@angular/material';

describe('AppComponent', () => {
  class MockService {
    getData() {
      return {"test": [{id:1, name: "name"}]};
    }
  }

  let mockService;
  beforeEach(async(() => {
    mockService = new MockService();
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HabitantsModule, CommonModule, FormsModule, MatSelectModule,
        MatInputModule,
        MatCardModule,
        MatGridListModule,
        MatButtonModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatChipsModule
      ],
      providers: [
        {provide: DataService, useValue: mockService}
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
     const fixture = TestBed.createComponent(AppComponent);
     const app = fixture.debugElement.componentInstance;
     expect(app).toBeTruthy();
  }));
});
