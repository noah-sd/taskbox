import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SdButtonStateEnum} from '../models/sd-button.enum';

@Component({
  selector: 'app-sd-button',
  template: `
    <button
      type="button"
      class="sd-btn"
      [ngClass]="{
      'sd-btn-primary': primary,
      'sd-btn-secondary': secondary,
      'sd-processing': state === 'processing',
      'spacing-ex': spacingChanges,
      }"
      [disabled]="state !== 'enabled'"
      (click)="onClick()"
    >
      <ng-container *ngIf="state !== 'processing'">
        <i *ngIf="icon === 'new'" class="material-icons">add</i>
        <i *ngIf="icon === 'delete'" class="material-icons">delete_forever</i>
        <i *ngIf="icon === 'clear'" class="material-icons">clear</i>
      </ng-container>
      <ng-container *ngIf="state === 'processing'">
        <i class="material-icons">refresh</i>
      </ng-container>
<!--      <i-->
<!--        *ngIf="icon"-->
<!--        class="sd-icon"-->
<!--        [ngClass]="{-->
<!--            'sd-icon-new': icon === 'new',-->
<!--            'sd-icon-delete': icon === 'delete',-->
<!--        }"-->
<!--      ></i>-->
      <span>{{label}}</span>
    </button>
  `,
  styles: [`
    @font-face {
      font-family: 'Avenir Next LT Pro 65 Medium';
      font-style: normal;
      font-weight: normal;
      src: local('Avenir LT Std 65 Medium'), url('../../assets/font-avenir/AvenirLTStd-Medium.woff') format('woff');
    }
    .sd-btn {
      -webkit-appearance: button;
      font-family: "Avenir Next LT Pro 65 Medium","Avenir Next",Futura,sans-serif;
      font-size: 1.4rem;
      font-weight: normal;
      line-height: 1.25;
      text-align: center;
      color: #303030;
      background-color: #E1E5EB;
      border: 1px solid #E7EAEF;
      border-radius: 0.5rem;
      vertical-align: middle;
      padding: 0.65em 1em;
      cursor: pointer;
      user-select: none;
      transition: all 0.2s ease-in-out;
    }

    .sd-btn:not(:disabled):hover {
      color: #303030;
      background-color: #EEF2F7;
    }
    .sd-btn:focus {
      box-shadow: none;
    }
    .sd-btn:disabled {
      opacity: 70%;
      cursor: not-allowed;
    }
    .sd-btn-primary {
      background-color: #5D9CE0;
      border-color: #7BAEE6;
      color: #fff;
    }
    .sd-btn-primary:not(:disabled):hover {
      background-color: #7FB5EB;
      border-color: #01549b;
      color: #fff;
    }
    .sd-btn-secondary {
      background-color: #70808c;
      color: #fff;
    }
    .sd-btn-secondary:not(:disabled):hover {
      background-color: #9eaab5;
      border-color: #4a5660;
      color: #fff;
    }
    .sd-icon {
      width: 1.2rem;
      height: 1.2rem;
      margin-right: 0.5rem;
      display: inline-block;
      background-repeat: no-repeat;
      background-position: center center;
    }
    .sd-icon-new {
      background-image: url('../../assets/svg-icons/plus_big.svg');
    }
    .sd-icon-delete {
      background-image: url('../../assets/svg-icons/trash-active.svg');
    }
    .spacing-ex .sd-icon {
      transform: translateY(1px);
      margin-right: 0.75rem;
    }
    .sd-btn .material-icons {
      font-size: 2rem;
      line-height: 0;
      margin-right: 0.35rem;
      margin-left: -0.33rem;
      transform-origin: center;
      transform: translateY(.5rem);
    }
    @keyframes spin {
      from {transform: translateY(.5rem) rotate(0deg);}
      to {transform: translateY(.5rem) rotate(360deg);}
    }
    .sd-processing .material-icons {
      animation: spin 2s infinite linear;
    }
    .sd-btn.spacing-ex {
      padding: 0.65em 1.3em 0.65em 1.2em;
    }
    .sd-btn.spacing-ex .material-icons {
      margin-right: 0.6rem;
    }
  `],
})

export class SdButtonComponent {

  @Input() label = 'button';

  @Input() primary?: boolean;

  @Input() secondary?: boolean;

  @Input() icon?: string;

  @Input() spacingChanges?: boolean;

  @Input() state = SdButtonStateEnum.ENABLED;

  @Output() onClickButton = new EventEmitter<Event>();

  /**
   * @ignore
   * Component method to trigger the onClick event
   */
  onClick() {
    this.onClickButton.emit();
  }
}
