import React from 'react';

const Footer=()=>{
    const year=new Date().getFullYear();
    return(
    <React.Fragment>
        <footer>
            <h5>copyright ℗ {year}</h5>
        </footer>
    </React.Fragment>


    )
}
export default Footer;
