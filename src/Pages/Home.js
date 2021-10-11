import React from 'react'

import Button from '../Component/Button'

const Home = () => {

    const Click = (props) => {
        alert('Clicked');
        console.log("Clicked 0");
    }
    const Click1 = (props) => {
        alert('Clicked 1');
        console.log("Clicked 1");
    }
    const Click2 = (props) => {
        alert('Clicked 2');
        console.log("Clicked 2");
    }
    const Click3 = (props) => {
        alert('Clicked 3');
        console.log("Clicked 3");
    }
    const Click4 = (props) => {
        var a = document.getElementById("post").value
        console.log(a);
        document.getElementById("first").innerHTML= a;
        
    }
    // var intervalId = window.setInterval(function(){
    //     document.getElementById("first").innerHTML = Date();
    //     console.log("Called");
    //   }, 1000);


    return (
        <>

            <input type="text" id="post"/>

            <Button
                onClick={() => Click}
                value="Click Me"
                styleClass="primary"
            />

            <Button
                onClick={() => Click1}
                value="Click Me"
                styleClass="primary1"
            />

            <Button
                onClick={() => Click2}
                value="Click Me"
                styleClass="primary2"
            />

            <Button
                onClick={() => Click3}
                value="Click Me"
                styleClass="primary3"
            />

            <Button
                onClick={() => Click4}
                value="Click Me"
                styleClass="primary4"
            />

            <div>
              <h1 id="first" className="text-center p-200">Text</h1>
            </div>


        </>
    )
}

export default Home
