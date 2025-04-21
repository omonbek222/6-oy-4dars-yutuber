// Navbar.jsx
function Navbar() {
    const user = localStorage.getItem('user')
  
    const handleLogout = () => {
      localStorage.clear()
      window.location.href = '/login'
    }
  
    return (
      <div className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-red-600">YouTube Klon</h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-800">{user}</span>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-3 py-1 rounded"
          >
            Chiqish
          </button>
        </div>
      </div>
    )
  }
  
  export default Navbar
  