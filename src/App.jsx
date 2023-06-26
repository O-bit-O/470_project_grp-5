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
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTlwxu5YYTbZG-xWEBdSbHLKxcac_x8wM-dQ&usqp=CAU" className="logo" alt="Vite logo" />
        {/* </a> */}
        {/* <a href="https://react.dev" target="_blank"> */}
        <img src="https://img.freepik.com/premium-vector/delivery-man-protective-mask-delivers-medicine-by-motorbike_208509-465.jpg" className="logo react" alt="React logo" />
        {/* </a> */}
      </div>
      <h1>Medicine Delivery System</h1>
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
