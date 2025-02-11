import React from "react";
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'



const divStyle = {
    display: 'flex',
    alignItems: 'center',
    jusifyContent: 'center',
    height: '400px',
    width: '100%'

}

function Slide({slideImages}) {

    return (
        <Fade>
            {
                slideImages.map((item, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, backgroundImage: `url(${item.url})` }}>
                        </div>
                    </div>
                ))
            }
        </Fade>
    )
}

export default Slide