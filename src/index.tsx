import * as React from 'react'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { createRoot } from 'react-dom/client'

import { App } from './app/app.component'
import { APP_CLASSNAMES_PREFIX } from './app/app.config'
import reportWebVitals from './reportWebVitals'
import { isDef } from './types/lang.types'

const cache = createCache({
  key: APP_CLASSNAMES_PREFIX,
})

const container = document.getElementById('root')

if (isDef(container)) {
  const root = createRoot(container)

  root.render(
    <CacheProvider value={cache}>
      <App />
    </CacheProvider>
  )
}

reportWebVitals()
