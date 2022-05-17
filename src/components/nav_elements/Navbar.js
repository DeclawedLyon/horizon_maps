import './navbar.css'
export default function Navbar(props) {
  const testClick = () => {
    console.log('clicked!')
  }
  return (
    <nav id="top-navbar">
      <ul>
        <li><button onClick={testClick}>Naden</button></li>
      </ul>
    </nav>
  )
}
