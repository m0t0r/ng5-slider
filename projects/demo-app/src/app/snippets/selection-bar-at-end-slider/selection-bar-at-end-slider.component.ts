import { Component } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-selection-bar-at-end-slider',
  templateUrl: './selection-bar-at-end-slider.component.html'
})
export class SelectionBarAtEndSliderComponent {
  value = 5;
  options: Options = {
    floor: 0,
    ceil: 10,
    showSelectionBarEnd: true
  };
}
