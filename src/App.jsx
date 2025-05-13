import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [complaint, setComplaint] = useState('')
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const correctPassword = "yourpassword"; // Set the correct password here

  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true)
    } else {
      alert("Incorrect password!")
    }
  }

  const handleSubmit = () => {
    // Handle the form submission, you can add more logic here
    alert(`Complaint submitted by: ${name}\nPhone: ${phone}\nComplaint: ${complaint}`)
  }

  return (
    <div className="complaint-form-container">
      {!isAuthenticated ? (
        <div className="password-container">
          <h1>Please Enter Password to Access Complaint Registration</h1>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          <button type="button" onClick={handlePasswordSubmit}>
            Submit Password
          </button>
        </div>
      ) : (
        <div>
          <h1>Complaint Registration AA Champion</h1>
          <form className="complaint-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="complaint">Complaint:</label>
              <textarea
                id="complaint"
                value={complaint}
                onChange={(e) => setComplaint(e.target.value)}
                placeholder="Describe your complaint"
                rows="5"
                required
              />
            </div>

            <button type="button" onClick={handleSubmit}>
              Submit Complaint
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default App
