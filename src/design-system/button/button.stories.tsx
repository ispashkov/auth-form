import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import base, { filename } from 'paths.macro'

import { getStrEnumValues } from '../../utils/enum.utils'
import { getStoryName } from '../../utils/storybook.utils'

import { Button } from './button.component'
import { ButtonColor, ButtonSize } from './button.types'

export default {
  title: getStoryName(base, filename),
  component: Button,
} as ComponentMeta<typeof Button>

const TemplateDefault: ComponentStory<typeof Button> = args => <Button {...args}>Example</Button>

const TemplateSizes: ComponentStory<typeof Button> = args => (
  <>
    {getStrEnumValues<ButtonSize>(ButtonSize).map(size => (
      <Button {...args} size={size}>
        Example
      </Button>
    ))}
  </>
)

const TemplateColors: ComponentStory<typeof Button> = args => (
  <>
    {getStrEnumValues<ButtonColor>(ButtonColor).map(color => (
      <Button {...args} color={color}>
        Example
      </Button>
    ))}
  </>
)
export const Default = TemplateDefault.bind({})

export const Loading = TemplateDefault.bind({})
Loading.args = {
  loading: true,
}

export const Sizes = TemplateSizes.bind({})

export const Colors = TemplateColors.bind({})
