import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import base, { filename } from 'paths.macro'

import { getStoryName } from '../../utils/storybook.utils'

import { Input } from './input.component'

export default {
  title: getStoryName(base, filename),
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Default placeholder',
}

export const Error = Template.bind({})
Error.args = {
  placeholder: 'Default placeholder',
  isError: true,
}
