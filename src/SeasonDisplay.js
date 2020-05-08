import React from 'react';

//function to determine what the season is
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
       return lat > 0 ? 'summer' : 'winter';
    } else {
       return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    //function to be able to call the function from inside the component and 
    //the function "getSeason" be able to get the lat and month.
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === 'winter' ? 'Burr, it is chilly' : "Let's hit the beach"
    const icon = season === 'winter' ? 'snowflake' : 'sun';
    
    return (
        <div>
            <i className={`${icon} icon`} />
            <h1>{text}</h1>
            <i className={`${icon} icon`} />
        </div>
    );
};

export default SeasonDisplay;
