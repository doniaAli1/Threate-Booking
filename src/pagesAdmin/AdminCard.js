import React from "react";
import { Link } from "react-router-dom";

const AdminCard = (props) => {
  return (
    <div className="product-card">
      <div className="card-top">
        <img alt={props.name} src={props.img} />
      </div>
      <div className="card-info">
        <h4 className="title">{props.name}</h4>
        <p className="info">{props.desc}</p>
        <h4 className="price">{props.price}</h4>
        <button className="deleteButton" onClick={props.onDelete}>
          Delete
        </button>
        <button>
          <Link
            to={'/update-product/' + props.id}
            onClick={() => props.onUpdate({ ...props })}
          >
            Update
          </Link>
        </button>
      </div>
    </div>
  );
};

export default AdminCard;
