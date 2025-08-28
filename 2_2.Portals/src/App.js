import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import ReactDom from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Form extends Component {
    state = {
        advOpen: false
    }

    componentDidMount(){
        setTimeout(this.handleClick, 3000)
    }

    handleClick = () => {
        this.setState(({advOpen}) => ({
            advOpen: !advOpen
        }))
    }

    myRef = React.createRef();
    mySecondRef = React.createRef();

    // componentDidMount(){
    //     this.myRef.current.focus();
    //     this.mySecondRef.current.doSmth();
    // }

    setInputRef = elem => {
        this.myRef = elem;
    }

    focusFirstTI = () => {
        if(this.myRef){
            this.myRef.focus();
        }
        // this.myRef.current.focus();
    }

    render() {
        return (
            <Container>
                <form onClick={this.handleClick} className="w-50 border mt-5 p-3 m-auto" style={{'overflow': 'hidden', 'position': 'relative'}}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input ref={this.setInputRef} className='form-control' type='email' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea onClick={this.focusFirstTI} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    {
                        this.state.advOpen ?
                        <Portal>
                            <Msg/>
                        </Portal> : null
                    }
                </form>
            </Container>
        )
    }
}

const Portal = (props) => {
    const node = document.createElement('div');
    document.body.appendChild(node);

    return ReactDom.createPortal(props.children, node);
}

const Msg = () => {
    return (
        <div style={{
            'width': '500px',
            'height': '150px',
            'backgroundColor': 'red',  
            'position': 'absolute', 
            'right': '0',     
            'bottom': '0'                
            }}>Hello World
        </div>
    )
}


class TextInput extends Component{

    doSmth = () => {
        console.log('Something')
    }

    render(){
        return (
            <input type="email" className='form-control' id='exampleControlInput' placeholder='email' />
        )
    }
}

function App() {
    return (
        <Form/>
    );
}

export default App;
