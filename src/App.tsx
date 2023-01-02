import { useState } from 'react'
import "@fontsource/tomorrow"
import { TrendingAssets } from './components/trending-asset/TrendingAssets'
import { Provider } from 'react-redux'
import store from './app/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
    <div className="App">
         <TrendingAssets/>
    </div>
  </Provider>

  )
}

export default App
