import { BrowserRouter, Route, Routes } from "react-router-dom"
import DataShorting from "./components/DataShorting/DataShorting"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/DataShorting" element={<DataShorting />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App