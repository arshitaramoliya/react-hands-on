export default function Button({ label, onClick, variant = 'primary', disabled = false }) {
  const styles = {
    primary: { background: '#4a90e2', color: '#fff' },
    danger: { background: '#e74c3c', color: '#fff' },
    ghost: { background: 'transparent', color: '#4a90e2', border: '1px solid #4a90e2' },
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...styles[variant],
        padding: '10px 20px',
        borderRadius: '8px',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        fontSize: '14px',
        fontWeight: 500,
        transition: 'opacity 0.2s',
      }}
    >
      {label}
    </button>
  );
}
