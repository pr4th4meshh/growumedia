import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/landing"
import NotFoundComponent from "./pages/not-found"

function App() {
  const ROUTES = [
    { element: <LandingPage />, path: "/" } /* Landing page / Home page */,
    { element: <NotFoundComponent />, path: "/*" } /* Not found page */,
  ]
  return (
    <div className="bg-[#f0efef] h-full">
      <Routes>
        {ROUTES.map((route) => (
          <Route element={route.element} path={route.path} />
        ))}
      </Routes>
    </div>
  )
}

export default App
