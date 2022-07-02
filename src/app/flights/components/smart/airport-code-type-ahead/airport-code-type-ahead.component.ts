import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Observable, switchMap } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-airport-code-type-ahead',
  templateUrl: './airport-code-type-ahead.component.html',
  styleUrls: ['./airport-code-type-ahead.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AirportCodeTypeAheadComponent implements OnInit {
  @Input() label: string = '';
  @Output() onCodeSelected = new EventEmitter<string>();
  @Output() onValidationChanged = new EventEmitter<boolean>(false);

  //ToDo: get airportCodes from service, local storage, cache, etc... (set constructor returns array without doubles)
  airportCodes: string[] = [...new Set( [
    '',
    'SEA',
    'PHX',
    'BOS',
    'LAX',
    'ORD',
    'JFK',
    'ATL',
    'SFO',
    'DFW',
    'EWR',
    'LAS',
    'MCO',
    'DEN',
    'LGA',
    'MIA',
    'IAD',
    'PHX',
    'BOS',
    'SEA',
    'PHL',
    'IAH',
    'CLT',
    'DTW',
    'DCA',
    'MSP',
    'SLC',
    'MDW',
    'FLL',
    'SAN',
    'BWI',
    'STL',
    'HNL',
    'PDX',
    'MSY',
    'CVG',
    'TPA',
    'BNA',
    'PIT',
    'AUS',
    'RDU',
    'SJC',
    'OAK',
    'SAT',
    'MEM',
    'MCI',
    'HOU',
    'SNA',
    'CLE',
    'DAL',
    'IND',
    'ABQ',
    'CMH',
    'MKE',
    'JAX',
    'TUS',
    'BDL',
    'BUF',
    'ANC',
    'OKC',
    'SMF',
    'ELP',
    'OGG',
    'PBI',
    'OMA',
    'BUR',
    'PVD',
    'RNO',
    'SDF',
    'CHS',
    'ORF',
    'LGB',
    'SAV',
    'BHM',
    'RIC',
    'BOI',
    'RSW',
    'ALB',
    'ONT',
    'HPN',
    'SYR',
    'KOA',
    'OSH',
    'GEG',
    'TUL',
    'DAY',
    'GRR',
    'ICT',
    'DSM',
    'LIT',
    'PWM',
    'MSN',
    'ROC',
    'COS',
    'PSP',
    'MHT',
    'TYS',
    'SBA',
    'EYW',
    'PNS',
    'BTV',
    'TLH',
    'BFI',
  ])];

  formControl = new FormControl<string | null>('', Validators.required);
  filteredOptions$: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions$ = this.formControl.valueChanges.pipe(
      startWith(''),

      debounceTime(250),
      distinctUntilChanged(),

      map((value) => this.filter(value || ''))

      //ToDo: airportCodesDataService instead of filter function
      //switchMap(value => this.airportCodesDataService.getSearchData(value))
    );
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    const result = this.airportCodes.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
    this.onCodeSelected.emit(result[0]);

    if (result[0]?.length < 3) {
      this.onValidationChanged.emit(true);
    } else {
      this.onValidationChanged.emit(false);
    }

    return result;
  }

  optionTrackBy(index: number, option: string) {
    return option;
  }
}
