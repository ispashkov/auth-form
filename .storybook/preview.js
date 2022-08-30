import { CacheProvider, Global } from '@emotion/react'
import createCache from '@emotion/cache'
import { GlobalCss } from '../src/mixins/global.mixin'
import { APP_CLASSNAMES_PREFIX } from '../src/app/app.config'
import { Storybook } from '../src/components/storybook/storybook.component'

// configure emotion cache
const cache = createCache({
  key: APP_CLASSNAMES_PREFIX,
  prepend: true,
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color|fill|stroke)$/i,
      date: /Date$/,
    },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
  layout: 'fullscreen',
}

export const decorators = [
  Story => (
    <CacheProvider value={cache}>
      <Global styles={GlobalCss} />
      <Storybook>{Story()}</Storybook>
    </CacheProvider>
  ),
]
