import './navbar.css'
export default function Navbar(props) {
  const testClick = () => {
    // console.log('clicked!')
  }

  return (
    <div id="top-navbar">
      <img src='*' id='company-logo' alt='company logo'></img>
      {/* <ul id='navbar-menu'>
        <li><button className='navbar-button' onClick={() =>{ props.setCutList(props.naden) testClick()}}></button></li>
        <li><button className='navbar-button' onClick={() => {props.setCutList(props.colville) testClick()}}>Colville</button></li>
      </ul> */}
      <button style={{fontSize: '0.5em'}}>sidebar menu? || login/logout?</button>
    </div>
  )
}
