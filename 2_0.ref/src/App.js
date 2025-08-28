import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Form extends Component {
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
                <form className="w-50 border mt-5 p-3 m-auto">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input ref={this.setInputRef} className='form-control' type='email' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea onClick={this.focusFirstTI} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </Container>
        )
    }
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
