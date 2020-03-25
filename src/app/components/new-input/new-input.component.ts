import { Component, forwardRef, Input, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-new-input",
  templateUrl: "./new-input.component.html",
  styleUrls: ["./new-input.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NewInputComponent),
      multi: true
    }
  ]
})
export class NewInputComponent implements ControlValueAccessor, OnInit {
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() type: string = "text";

  propagateChange: any = () => {};
  onTouch: any = () => {};
  value: string = "";

  constructor() {}

  ngOnInit() {}

  onChange(event: any) {
    this.value = event.target.value;
    this.propagateChange(this.value);
  }

  writeValue(value: string): void {
    this.value = value ? value : "";
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateChange = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}
}
