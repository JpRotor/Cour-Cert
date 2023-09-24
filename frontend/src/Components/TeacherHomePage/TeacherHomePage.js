import React from 'react';
import './TeacherHomePage.css'

export const TeacherHomePage = () => 
{
  return(
      <div className='homepage'>
        <nav>
          <div class ="app-logo">
            <img src = "/logo/AppLogo.png" alt= "Cour-Cert" height={150} width={100}></img>
          </div>
          <div class = "searchBar">
            <input type = "text" id="search-input" placeholder="Search here"></input>
            <button id="search-button">Search</button>
          </div>
          <div class ="nav-links">
            <ul>
              <li><a href = "#"> View Course</a> </li>
              <li><a href = "#"> Account</a> </li>
              <li><a href = "#"> Signout</a> </li>
            </ul>
          </div>
        </nav>
        {/* <div class="container"></div> */}
        <div class ="addCourse">

            <button id="add-button">Add Course</button>
          </div>
      </div>      
  );
}
