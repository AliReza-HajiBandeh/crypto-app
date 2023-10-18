import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    }
  ]
})
export class SwitchComponent implements ControlValueAccessor {
  private _onChange!: (_: any) => void;
  private _onTouched!: (_: any) => void;
  @Input({required: true}) name!: string;
  @Input({required: true}) cases!: {text: string, value: string | number | null}[];
  @Input() disabled = false;
  value: string | number | null = null;
  selectedIndex: number = 0;
  registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: (_: any) => void): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.selectedIndex = this.cases.findIndex(item => item?.value === (obj ?? null));
    this.value = this.selectedIndex > -1 ? (obj ?? null) : null;
  }

  caseChange() {
    this.selectedIndex + 1 > this.cases?.length - 1 ? this.selectedIndex = 0 : this.selectedIndex += 1;
    this.value = this.cases[this.selectedIndex]?.value;
    this._onChange(this.value);
  }
}
