import { Link } from "react-router-dom";
import "../style/ProductCard.css"
const ProductCard = (props) =>{
    return(
          <div className="product-card">
            <div className="card-top">
              <img alt={props.name}  src={props.img}/>
            </div>
            <div className="card-info">
              <h4 className="title">{props.name}</h4>
              <p className="info"> {props.desc} </p>
              <h4 className="price">{props.price}</h4>
              <button>
                <Link to={'/productinfo/' + props.id} >book now!</Link>  </button>
            </div>
            
          </div>
    );
}
export default ProductCard;