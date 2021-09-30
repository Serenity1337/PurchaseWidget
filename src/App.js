import PurchaseWidget from './Pages/PurchaseWidget'
import { Provider } from 'react-redux'
import store from './Redux/store'
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <PurchaseWidget />
      </div>
    </Provider>
  )
}

export default App
