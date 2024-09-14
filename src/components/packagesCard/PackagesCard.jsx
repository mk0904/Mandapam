import './PackagesCard.css';

function PackagesCard({props}) {
     return (
     <div className='card'>
          <div className='cardHero'>
               <div className='cardImage'></div>
               <div className='cardHeader'>
                    <h2>{props.packageName}</h2>
                    <p>{props.shortDesc}</p>
               </div>
               <h3 style={{fontWeight:"800", fontSize:"1.5rem", color:"hsla(0, 87%, 15%, 0.796)"}}>₹ {props.price}</h3>
          </div>
          <div className='cardInfo'>
               <div>
                    <h4>Inclusions</h4>
                    <ul>
                         {props.inclusions && props.inclusions.map((inclusion, index) => (
                         <li key={index}>{inclusion}</li>
                         ))}
                    </ul>
                    <h4>Exclusions</h4>
                    <ul>
                         {props.exclusions && props.exclusions.map((exclusion, index) => (
                         <li key={index}>{exclusion}</li>
                         ))}
                    </ul>
                    </div>
          </div>
          <button>Schedule a call</button>
     </div>
     );
}

export default PackagesCard;