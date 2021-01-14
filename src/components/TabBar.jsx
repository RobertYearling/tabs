import React, { useState } from 'react';

const TabBar = props => {
    const selectedTab = {
        backgroundColor: "lightslategray",
        color: "white"
    }

    const notSelectedTab = {
        backgroundColor: "lightgray",
        color: "black"
    }

    const changeHandler = e => {
        props.isClicked(props.tabItem.idx)
        console.log(`You selected button ${props.tabItem.idx}`)
    }
    return(
        <button onClick = {changeHandler} style = { props.tabItem.selected ? selectedTab : notSelectedTab }> {props.tabItem.title} </button>
    );
}

export default TabBar;