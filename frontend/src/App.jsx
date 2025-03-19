import React from 'react'
import './App.css'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alltasks from './Pages/Alltasks';
import ImportantTasks from './Pages/ImportantTasks';
import IncompletedTasks from './Pages/IncompletedTasks';
import CompletedTasks from './Pages/CompletedTasks';




function App() {
  return (
    <div className='bg-gray-900 text-white h-screen p-3'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
          <Route index element={<Alltasks></Alltasks>}></Route>  
          <Route path='/importantTasks' element={<ImportantTasks></ImportantTasks>}></Route>  
          <Route path='/completedTasks' element={<CompletedTasks/>}></Route>  
          <Route path='/incompletedTasks' element={<IncompletedTasks/>}></Route>  
          </Route>
        </Routes>
      </Router>


    </div>
  )
}

export default App
