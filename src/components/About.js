import React,{useState} from 'react'

export default function About() {
    const [mystyle,setstyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btntext,setbtntext] = useState("Enable Dark Mode")

    const toggle = ()=>{
        if(mystyle.color === 'black'){
          setstyle({
              color: 'white',
              backgroundColor: 'black'
          })
          setbtntext("Enable Light Mode")
        }
        else
        {
            setstyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtntext("Enable Dark Mode")
        }
    }
    return (
        <div className='container' style={mystyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Analyze your text
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mystyle} >
                        analyze,manipulate your text with the help of this easy to use app.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={mystyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Free to use
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mystyle} >
                       this app is free of cost and can be used anytime and anywhere.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Browser Compatible
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mystyle}>
                       Can be accessed from any browser.
                    </div>
                    </div>
                </div>
                </div>
                <button onClick={toggle} className="btn btn-primary my-3" >{btntext}</button>
        </div>
    )
}
