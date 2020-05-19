import React from "react";
import './Pricing.css'

const pricing = (props) => {
  const {data, id} = props
  const renderData = data.filter(item=>{
      return item.id === id;
  });
  let renderingData = renderData[0];
  if(renderingData !== undefined){
  return (
    <React.Fragment>
      <div className = "details">
        <span>
          <img src={renderingData.image_url} alt = "Thumbnail"></img>
        </span>
        <span className="data-text">
          {renderingData.name} <br />
          <span style={{ opacity: "0.5" }}>
            <em>{renderingData.region}</em>
          </span>
        </span>
      </div>
      <h3>Pricing</h3>
      <ul className = "price-list">
        {renderingData.price.map(item => {
        for(let [key, value] of Object.entries(item)){
            console.log(item)
            return <li key={key}><span className = "outer"><span className="price-key">{key}</span></span> <span className = "price-value">${value}</span></li>
        }        
        })}
        
      </ul>
      <button onClick = {props.closeHandler} className = "btn-close">Close</button>
    </React.Fragment>
  );}
  else
  return null;
};


export default pricing;