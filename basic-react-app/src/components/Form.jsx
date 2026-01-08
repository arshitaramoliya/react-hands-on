import { useState } from 'react';

export default function Form({ onSubmit }) {
  const [fields, setFields] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!fields.name.trim()) e.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Valid email required';
    if (!fields.message.trim()) e.message = 'Message cannot be empty';
    return e;
  };

  const handleChange = (e) => setFields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    onSubmit?.(fields);
    setFields({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
      {['name', 'email', 'message'].map((field) => (
        <div key={field}>
          <input
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={fields[field]}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #ddd' }}
          />
          {errors[field] && <p style={{ color: 'red', fontSize: '12px', margin: '2px 0 0' }}>{errors[field]}</p>}
        </div>
      ))}
      <button type="submit" style={{ padding: '10px', background: '#4a90e2', color: '#fff', border: 'none', borderRadius: '6px' }}>
        Submit
      </button>
    </form>
  );
}
