import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import base, { filename } from 'paths.macro'

import { getStoryName } from '../../utils/storybook.utils'

import { SignInForm } from './sign-in-form.component'

export default {
  title: getStoryName(base, filename),
  component: SignInForm,
} as ComponentMeta<typeof SignInForm>

const Template: ComponentStory<typeof SignInForm> = args => {
  return <SignInForm {...args} />
}

export const Default = Template.bind({})
Default.args = {
  values: {
    email: '',
    password: '',
  },
}
