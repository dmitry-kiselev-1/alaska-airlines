import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-airport-code-type-ahead',
  templateUrl: './airport-code-type-ahead.component.html',
  styleUrls: ['./airport-code-type-ahead.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AirportCodeTypeAheadComponent implements OnInit {

  @Input() label: string = "";
  @Output() onCodeSelected = new EventEmitter<string>();

  //ToDo: get airportCodes from service, local storage, cash, etc...
  airportCodes: string[] = ['SEA', 'PHX', 'BOS'];

  formControl = new FormControl<string | null>('');
  filteredOptions$: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions$ = this.formControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filter(value || '')),
    );
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    const result = this.airportCodes.filter(option => option.toLowerCase().includes(filterValue));
    this.onCodeSelected.emit(result[0]);
    return result;
  }

}
