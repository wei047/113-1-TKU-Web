import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        魏崇彧的網站
      </h1>
      <div>
        <p>
          我叫魏崇彧
        </p>
      </div>
      <span>
        學號是412637836
      </span>

      <a href="https://hackmd.io/@peiyucheng/rJtFyi62C">
        這是我老師的網站
      </a>

      <img src="https://th.bing.com/th/id/OIP.sVui2uMKJQEXCXa8JwEuzgHaF7?rs=1&pid=ImgDetMain" alt="" />
      <p>
        這是我在網路上找到的狗
      </p>

      <ul>
        <li>我的興趣是聽音樂</li>
        <li>我也會演奏許多樂器</li>
      </ul>

      <ol>
        <li>我有去過新加坡參加音樂比賽</li>
        <li>我喜歡新加坡的文化</li>
      </ol>

      <table>
        <tr>
          <th>名稱</th>
          <th>年齡</th>
        </tr>
        <tr>
          <td>魏崇彧</td>
          <td>20</td>
        </tr>
      </table>

      <strong>這是我的自我介紹</strong>
      <em>。</em>
    </>
  )
}

export default App;