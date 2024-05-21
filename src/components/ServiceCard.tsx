import React from 'react'

interface Props {
    img: string;
    serviceName: string;
    className?: string; 
}

export const ServiceCard = ({img, serviceName, className = ""}: Props) => {
  return (
    <div className="service">
        <div className="img-container">
            <img src={img} alt="" className={className}/>
        </div>
        <span>{serviceName}</span>
    </div>
  )
}
