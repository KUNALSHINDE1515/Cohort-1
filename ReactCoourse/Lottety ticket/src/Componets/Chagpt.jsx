import React, { useState } from 'react';

function RegistrationForm() {
  const [form, setFormData] = useState({
    name: '',
    email: ''
  });
//   const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    const { name, email } = form;
    console.log("Name:", form.name);
    console.log("Email:", form.email);
    alert(`Thank you, ${form.name}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      
      <label>Name:</label><br />
      <input 
        type="text" 
        value={form.name} 
        name='name'
        onChange={(e) => setFormData(e.target.value)} 
      /><br /><br />

      <label>Email:</label><br />
      <input 
        type="email" 
        value={form.email} 
        name='email'
        onChange={(e) => setFormData(e.target.value)} 
      /><br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
