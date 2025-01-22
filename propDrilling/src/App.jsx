import { useContext, useState } from "react"
import { CountContext } from "./components/Context";
import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import './App.css'

const Dashboard = lazy(() => import("../components/Dashboard"))
const Landing = lazy(() => import("../components/Landing"))

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>

      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Count({ setCount }) {
  return (
    <div>
      <CountRendrer />
      <Buttons setCount={setCount} />
    </div>
  )
}

function CountRendrer() {
  const count = useContext(CountContext);
  return <div>{count}</div>
}

function Buttons({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button onClick={() => { setCount(count + 1) }}>Increase</button>
      <button onClick={() => { setCount(count - 1) }}>Decrease</button>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button onClick={() => { navigate("/") }}>Landing</button>
        <button onClick={() => { navigate("/dashboard"); }}>Dashboard</button>
      </div>
    </div>
  )
}

export default App
