import React, { Component } from 'react'
import logo_phone from '../img/logo_phone.png'
import logo_hand1 from '../img/logo_hand1.png'
import logo_hand2 from '../img/logo_hand2.png'
import logo_hand3 from '../img/logo_hand3.png'


class IntroComponent extends React.Component{
    constructor(args){
        super(args)

        this.phoneCSS = {
            backgroundImage: `url(${logo_phone})`
        }

        this.hand1CSS = {
            backgroundImage: `url(${logo_hand1})`
        }

        this.hand2CSS = {
            backgroundImage: `url(${logo_hand2})`
        }

        this.hand3CSS = {
            backgroundImage: `url(${logo_hand3})`
        }
    }



    render(){
        return(
            <div id = "intro"> 
                <div class = "centered" id = "circle"> </div>
                <div class = "img centered" id = "hand1" style = { this.hand1CSS }> </div>
                <div class = "img centered" id = "hand2" style = { this.hand2CSS }> </div>
                <div class = "img centered" id = "hand3" style = { this.hand3CSS }> </div>
                <div class = "img centered" id = "phone" style = { this.phoneCSS }>
                <div id = "weseeyou-container"> <div id = "weseeyou">We See You Scrolling</div> </div>
                </div>
            
                <div id = "scrollig"> </div>
            </div>
        )
    }
}

export default IntroComponent