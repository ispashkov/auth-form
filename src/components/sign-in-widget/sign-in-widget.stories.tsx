import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import base, { filename } from 'paths.macro'

import { getStoryName } from '../../utils/storybook.utils'

import { SignInWidget } from './sign-in-widget.component'

export default {
  title: getStoryName(base, filename),
  component: SignInWidget,
} as ComponentMeta<typeof SignInWidget>

const Template: ComponentStory<typeof SignInWidget> = args => <SignInWidget {...args} />

export const Example = Template.bind({})
Example.args = {
  values: {
    email: '',
    password: '',
  },
}
