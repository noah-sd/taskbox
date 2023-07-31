import {Meta, StoryObj} from '@storybook/angular';
import {SdButtonComponent} from './sd-button.component';
import {SdIconsEnum} from '../models/sd-icons.enum';
import {SdButtonStateEnum} from '../models/sd-button.enum';

const meta: Meta<SdButtonComponent> = {
  title: 'SD Button',
  component: SdButtonComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: [ SdIconsEnum.NEW, SdIconsEnum.DELETE, SdIconsEnum.CLEAR ],
    },
    state: {
      control: 'select',
      options: [ SdButtonStateEnum.ENABLED, SdButtonStateEnum.DISABLED, SdButtonStateEnum.PROCESSING ],
    }
  },
}

export default meta;
type Story = StoryObj<SdButtonComponent>;

export const Default: Story = {
  args: {
    label: 'Default',
  },
}

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary',
  },
}

export const Secondary = {
  args: {
    secondary: true,
    label: 'Secondary',
  },
}

export const Icon: Story = {
  args: {
    label: 'Clear',
    icon: SdIconsEnum.CLEAR,
  }
}

export const IconPrimary: Story = {
  args: {
    primary: true,
    label: 'New Item',
    icon: SdIconsEnum.NEW,
  },
}

export const IconSecondary: Story = {
  args: {
    secondary: true,
    label: 'Import',
    icon: SdIconsEnum.NEW,
  },
}

export const Processing: Story = {
  args: {
    label: 'Saving',
    state: SdButtonStateEnum.PROCESSING,
  }
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    state: SdButtonStateEnum.DISABLED,
  }
}

export const SpacingExample: Story = {
  args: {
    primary: true,
    label: 'New Item',
    icon: SdIconsEnum.NEW,
    spacingChanges: true,
  }
}
