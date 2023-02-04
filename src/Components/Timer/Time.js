/* eslint-disable jsx-a11y/heading-has-content */
import React, { Component } from 'react';
import './Timer.css'


class Time extends Component {

    state={
        second: 0,
        minute:0,
        hour:0,
        stopVal: '',
        clearVal:'',
        inter:[
            {
               
            }
        ],
    }

    start=()=>{
      let a =  setInterval(() => {
           let {hour,second,minute} = this.state

           if (second <= 59 && second > 0){

               second--
               this.setState({
                second,
               });
           }else if (minute <= 59 && minute > 0){
            minute--
            this.setState({
                minute,
                second:59, 
            })
           }else {
            hour--
            this.setState({
                hour,
                minute:59,
                second: 59,
            })
           }
        }, 100);
        this.setState({
            stopVal:a,
            clearVal:a
        })
    }

    stop=()=>{
        clearInterval(this.state.stopVal)
    }

    interval=()=>{
        const {second,minute,hour,inter}=this.state

        inter.push({
            hour,
            minute,
            second,
        })
        this.setState ({
            inter
        })
    }

    clear=()=>{
        clearInterval(this.state.clearVal)

        this.setState({
            hour:0,
            minute:0,
            second:0,
            inter:[]
        })
    }

    Hpluse =()=>{
        let {hour,second,minute} = this.state

        hour++;

        this.setState({
            hour,
            second,
            minute,
        })
    }

    Hminus =()=>{
        let {hour,second,minute} = this.state

        hour--;

        this.setState({
            hour,
            second,
            minute,
        })
    }

    Mpluse =()=>{
        let {hour,second,minute} = this.state

        minute++;

        this.setState({
            hour,
            second,
            minute,
        })
    }

    Mminus =()=>{
        let {hour,second,minute} = this.state

       minute--;

        this.setState({
            hour,
            second,
            minute,
        })
    }

    Cpluse =()=>{
        let {hour,second,minute} = this.state

        second++;

        this.setState({
            hour,
            second,
            minute,
        })
    }

    Cminus =()=>{
        let {hour,second,minute} = this.state

       second--;

        this.setState({
            hour,
            second,
            minute,
        })
    }

    

    render() {
        const {second,minute,hour,inter}=this.state
        return (
            <>
            <div className='Time-BCG'>
                <div className="Time-header">
                    <h1>My first timer</h1>
                </div>
                <div className="Time-Center">
                    <div className="hour">
                        <button onClick={this.Hpluse}>+</button>
                        <h2>{hour}</h2>
                        <button onClick={this.Hminus}>-</button>
                    </div>
                    <div className="Minute">
                        <button onClick={this.Mpluse}>+</button>
                        <h2>{minute}</h2>
                        <button onClick={this.Mminus}>-</button>
                    </div>
                    <div className="Second">
                        <button onClick={this.Cpluse}>+</button>
                        <h2>{second}</h2>
                        <button onClick={this.Cminus}>-</button>
                    </div>
                </div>
                <div className="Time-footer">
                    <button start onClick={this.start}>Start</button>
                    <button stop onClick={this.stop}>Stop</button>
                    <button interval onClick={this.interval}>Interval</button>
                    <button clear onClick={this.clear}>Clear</button>
                </div>
            </div>
            <div className="inter">
                {
                    inter.map((item,index)=>(
                        <h3 key={index}>{item.hour}{item.minute}{item.second}</h3>
                    ))
                }
            </div>
            </>
        );
    }
}

export default Time;
