import React from 'react';

export default function Experience(props) {
    if (props.position == "right") {
        return (
            <div class="container">
                <div class="sewa_text">
                  {props.text}
              </div>
              <div class="sewa">
                    <img src={props.imageURL} />
                </div>
            </div>)
    } else {
        return (
            <div class="container">
                <div class="bfp">
                    <img src={props.imageURL} />
                </div>
                <div class="bfp_text">
                  {props.text}
              </div>
            </div>)
    }



    
}