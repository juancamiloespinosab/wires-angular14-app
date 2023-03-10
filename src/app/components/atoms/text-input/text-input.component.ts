import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import {
  IButtonConfig,
  IImage,
  IImageConfig,
  ITextInput,
  ITextInputConfig,
} from '../../interfaces';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent implements OnInit {
  @Input() data!: ITextInput;
  @Input() config!: ITextInputConfig;

  inputType: string = 'text';

  eyeImageButton: {
    button: { config: IButtonConfig };
    image: { data: IImage; config: IImageConfig };
  } = {
    button: {
      config: {
        type: 'flat',
      },
    },
    image: {
      data: {
        imageUrl: 'assets/img/eye.png',
      },
      config: {
        width: '25px',
      },
    },
  };

  formControl: AbstractControl = new FormControl({});

  constructor() {}

  ngOnInit(): void {
    this.inputType = this.config.type;
    this.formControl = this.data.formControl;
  }

  getToggleShowPasswordFn() {
    const toggleShowPassword = () => {
      this.inputType === 'password'
        ? (this.inputType = 'text')
        : (this.inputType = 'password');
    };

    return toggleShowPassword.bind(this);
  }
}
