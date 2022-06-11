import "./dropdownMenu.css";

import React, { useState } from "react";

const DropdownMenu = () => {
  const [showDropDown, setShowDropDown] = useState(false)
  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
  function openMenu() {
    // const test = document.getElementById("myDropdown")
    // const newTest = test.classList
    console.log('newTest')
    // .classList.toggle("show");
    if (showDropDown === false)  setShowDropDown(true) 
    else setShowDropDown(false)
  }

  // Close the dropdown menu if the user clicks outside of it
  // window.onclick = function (event) {
  //   if (!event.target.matches(".dropbtn")) {
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains("show")) {
  //         openDropdown.classList.remove("show");
  //       }
  //     }
  //   }
  // };
  return (
    <div>
      <div class="dropdown">
        <button onClick={() => {
          console.log('click')
          openMenu()}} className={`dropbtn`}>
          Dropdown
        </button>
        <div id="myDropdown" className={`${showDropDown === false ? 'dropdown-content' : ''}  ${showDropDown === true ? 'show-drop-content' : ''}`}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
