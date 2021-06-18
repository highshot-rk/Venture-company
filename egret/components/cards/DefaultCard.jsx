import React from "react";
import { Card } from "@material-ui/core";

const DefaultCard = ({ title, subtitle, icon, styleName }) => {
  return (
    <Card elevation={6} className={`px-24 py-20 h-100 ${styleName}`}>
			<img className="text-white text-middle" src={icon} alt={subtitle}/>
      <div className="card-title py-12">{title}</div>
      <div className="card-subtitle">{subtitle}</div>
    </Card>
  );
};

export default DefaultCard;