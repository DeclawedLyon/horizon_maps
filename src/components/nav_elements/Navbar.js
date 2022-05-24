import './navbar.css'
export default function Navbar(props) {
  const testClick = () => {
    console.log('clicked!')
  }

  return (
    <nav id="top-navbar">
      <ul id='navbar-menu'>
        <li><button className='navbar-button' onClick={() =>{ /*props.setCutList(props.naden)*/ testClick()}}>Naden</button></li>
        <li><button className='navbar-button' onClick={() => {/*props.setCutList(props.colville)*/ testClick()}}>Colville</button></li>
      </ul>
      <button>sidebar menu?</button>
    </nav>
  )
}
