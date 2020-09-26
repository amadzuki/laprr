import React from 'react'
import { ThemeProvider } from '@xstyled/styled-components'
import ProductList from './pages/ProductList'

const theme = {
  colors: {
    primary: '#F9423A',
    secondary: '#A23530',
    mainText: '#424749',
    subText: '#6E7679',
    iconBackground: '#e2e4e4',
    outlineBorder: '#f1f1f2',
  },
  fonts: {
    primary: 'Noto Sans',
  },
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProductList></ProductList>
    </ThemeProvider>
  )
}

export default App
