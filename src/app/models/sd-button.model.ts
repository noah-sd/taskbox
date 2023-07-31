import {SdButtonStateEnum} from './sd-button.enum';
import {SdIconsEnum} from './sd-icons.enum';

export interface SdButton {
  label: string;
  primary?: boolean;
  secondary?: boolean;
  icon?: SdIconsEnum;
  state?: SdButtonStateEnum;
  spacingChanges?: boolean;
}
