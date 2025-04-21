import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem('user', username)
      navigate('/')
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h1 className="text-xl font-bold mb-4">Kirish</h1>
        <input
          className="border p-2 w-full mb-4"
          type="text"
          placeholder="Ismingizni yozing"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-red-600 text-white py-2 px-4 rounded w-full"
        >
          Kirish
        </button>
      </div>
    </div>
  )
}

export default Login
