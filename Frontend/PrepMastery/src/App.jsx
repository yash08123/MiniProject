import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('http://127.0.0.1:8000/ques/')
       .then((response) => response.json())
       .then((data) => {
          // console.log(data);
          setData(data.questions);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);
  console.log(data)

  return (
    <>
      <div>
      {data.map((question, index) => (
        <p key={index}>{question.Questions}</p>
      ))}
       
      </div>
    </>
  )
}

export default App
