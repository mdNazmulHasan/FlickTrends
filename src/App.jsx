import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({ title,  }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
        </div>
    )
}

const App = () => {
    return (
        <>
         <h2>Functional arrow component</h2>
         <Card title="minion"/>
         <Card title="id invaded"/>
        </>
   )
}

export default App
