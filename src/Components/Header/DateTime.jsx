import React, { useState, useEffect } from 'react';
import Capitalize from './Capitalize';






function DateTime(){

  

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDate(new Date()), 1000);
    }, []);


    return (<div>

        <p>{date.toLocaleDateString('hu-HU', {
                 year: 'numeric',
                 month: 'long',
                 day: 'numeric'
              })}</p>
        <p>{Capitalize(date.toLocaleDateString('hu-HU', {
                 weekday:'long'
              }))}</p>
        <p> {date.toLocaleString('hu-HU', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            })}</p>
        
    </div>);
}

export default DateTime;