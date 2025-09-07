//JSX react
import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * -logo
 * -nav items
 * Body
 * -search
 * -restaurant container
 *   -restaurant card
 * footer
 * -copyright
 * -links
 * -address
 */

const Header = () => (
    <div className = "header">
        <img className = "logo" src = "https://img.freepik.com/premium-vector/savorbite-kitchen-food-company-logo-design_1059123-403.jpg" />
        <div className = "nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)



const RestraurantCard = (props) => (
  <div className = "restraunt-card">
    <img className = "restraunt-logo" src = {props.image} />
    <ul> 
      <li>{props.res_name}</li>
      <li>{props.cuisine}</li>
      <li>{props.rating}</li>
    </ul>
  </div>
)

const Body = () =>(
  <div className = "body">
    <div className = "search"></div>
    <div className = "restraunt-container">
      <RestraurantCard res_name="Meghana foods" 
      cuisine="Biriyani" image="https://bonmasala.com/wp-content/uploads/2022/10/mutton-biriyani-recipe.jpeg" rating="4.5" />
      <RestraurantCard res_name="Ambur Foods"
      cuisine="Chinese street foods"  image = "https://images.unsplash.com/photo-1585032226651-759b368d7246?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
      rating="3.5"/>
    </div>
  </div>
)

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);