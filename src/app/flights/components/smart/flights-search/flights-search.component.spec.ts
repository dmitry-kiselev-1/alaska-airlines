import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { FlightsSearchComponent } from './flights-search.component';

describe('FlightsSearchComponent', () => {
  let component: FlightsSearchComponent;
  let fixture: ComponentFixture<FlightsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatAutocompleteModule],
      declarations: [FlightsSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlightsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
