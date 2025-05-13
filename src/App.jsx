import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [complaint, setComplaint] = useState('')

  const handleSubmit = () => {
    // Handle the form submission, you can add more logic here
    alert(`Complaint submitted by: ${name}\nPhone: ${phone}\nComplaint: ${complaint}`)
  }

  return (
    <div className="complaint-form-container">
      <h1>Complaint Registration</h1>
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
  )
}

export default App
