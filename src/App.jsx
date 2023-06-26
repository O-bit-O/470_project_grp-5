import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank"> */}
        <img src="https://png.pngtree.com/png-clipart/20230325/original/pngtree-juicy-burgers-with-a-transparent-background-png-image_9002761.png" className="logo" alt="Vite logo" />
        {/* </a> */}
        {/* <a href="https://react.dev" target="_blank"> */}
        <img src="https://www.cicis.com/content/images/cicis/Jalapeno%20pizza.png" className="logo react" alt="React logo" />
        {/* </a> */}
      </div>
      <h1>Food Delivery System</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
