export default function Greeting({ name = 'World' }) {
  return <h1 style={{ fontFamily: 'sans-serif' }}>Hello, {name}!</h1>;
}
