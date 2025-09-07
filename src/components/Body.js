import RestraurantCard from "./RestraurantCard" 
import {CDN_URL_1, CDN_URL_2} from "../utils/constants"

const Body = () =>(
  <div className = "body">
    <div className = "search"></div>
    <div className = "restraunt-container">
      <RestraurantCard res_name="Meghana foods" 
      cuisine="Biriyani" image={CDN_URL_1} rating="4.5" />
      <RestraurantCard res_name="Ambur Foods"
      cuisine="Chinese street foods"  image = {CDN_URL_2}
      rating="3.5"/>
    </div>
  </div>
)

export default Body;