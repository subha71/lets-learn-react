
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

export default RestraurantCard;