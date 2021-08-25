import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { store, persistor } from './redux/store/phoneBook-store'

// import { myAction } from './redux/actions/phoneBook-actions'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
reportWebVitals()
// // curried functions
// const greeting = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}`)
//   }
// }

// const fullGreeting = greeting('Nice to meet you')
// fullGreeting('Adam')
// fullGreeting('Annet')
// greeting('Nice to meet you')('Alice')

// const curriedGreeting = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}`)
//   }
// }

// const fullCurriedGreeting = curriedGreeting('Hello, Mr.')
// fullCurriedGreeting('John')
// // console.log(fullCurriedGreeting())

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
