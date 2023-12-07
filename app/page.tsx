'use client'
import axios from 'axios'
import { useState } from 'react'


export default function Home() {
  const initialData = {
    model: '',
    quantity: '',
    date: '',
    licenseLevel: '',
    comment: ''
  }
  const [form, setForm] = useState(initialData)

  const submitForm = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e, form)
    try {
      const res = await axios.post('/api/batch', form)
      setForm(initialData)
      console.log(res)
    } catch(error) {
      console.error(error)
    }
  }

  return (
    <main className="bg-background h-screen">
      <img src="logo.png" className="pl-4 pt-4 mb-4" />
      <form onSubmit={submitForm} className="rounded max-w-lg mx-auto flex flex-col justify-center border-accent p-8 m-8 border-2">
        <div className="text-white text-xl mb-2">Batch Form</div>
        <select
          className="mb-2 rounded p-2"
          name="model"
          value={form.model}
          required
          onChange={e => setForm({...form, model: e.target.value})}
        >
          <option disabled value="">Model</option>
          <option value="Model 1">Model 1</option>
          <option value="Model 2">Model 2</option>
          <option value="Model 3">Model 3</option>
        </select>
        <input
          className="mb-2 rounded p-2"
          name="date"
          type="date"
          required 
          value={form.date}
          onChange={e => setForm({...form, date: e.target.value})}
        />
        <input
          className="mb-2 rounded p-2"
          required
          name="quality"
          placeholder="Quantity"
          type="number" 
          value={form.quantity}
          onChange={e => setForm({...form, quantity: e.target.value})}
        />
        <select 
          className="mb-2 rounded p-2"
          name="licenseLevel"
          value={form.licenseLevel}
          required
          onChange={e => setForm({...form, licenseLevel: e.target.value})}
        >
          <option disabled value="">License Level</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
        <input
          className="mb-2 rounded p-2"
          type="text"
          placeholder="Comment (not required)"
          value={form.comment}
          onChange={e => setForm({...form, comment: e.target.value})}
        />
        <button type="submit" className="bg-accent rounded text-white p-2">Submit</button>
      </form>
    </main>
  )
}
