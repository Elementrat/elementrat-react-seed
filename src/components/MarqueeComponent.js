import React, { Component } from 'react'

class MarqueeComponent extends React.Component{
    constructor(args){
        super(args)
    }

    render(){
        return(
            <div id = "marquee"> 
                <marquee speed="6" class = "bullet-list">
                {
                    this.props.bullets.map((x,i) =>
                        <div class = "bullet" > {x} </div>
                    )
                   
                }
                 </marquee>
            </div>
        )
    }
}

export default MarqueeComponent