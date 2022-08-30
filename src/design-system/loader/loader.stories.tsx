import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import base, { filename } from 'paths.macro'

import { getStoryName } from '../../utils/storybook.utils'

import { Loader } from './loader.component'

export default {
  title: getStoryName(base, filename),
  component: Loader,
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = args => <Loader {...args} />

export const Default = Template.bind({})
