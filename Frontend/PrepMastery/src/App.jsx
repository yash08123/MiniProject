import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState(null);
  
  useEffect(async() => {
    try { const result = await fetch('http://127.0.0.1:8000/ques/')
        const data = await result.json()
        setData(data)
      }
      catch (e){
        console.log(e)  
      }
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
