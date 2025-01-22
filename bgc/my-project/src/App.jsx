import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
          <button
            className="outline-none px-4 rounded-full shadow-lg"
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 rounded-full shadow-lg"
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 rounded-full shadow-lg"
            onClick={() => setColor("violet")}
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>
          <button
            className="outline-none px-4 rounded-full shadow-lg"
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
