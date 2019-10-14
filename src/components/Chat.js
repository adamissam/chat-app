import React from 'react';
import './Chat.css'


// function Chat(props) {

//     return (<div className='Contact'>
//         <img src={props.image} alt={props.name} className='avatar' />
//         <div>
//             <div className='name'>
//                 {props.name.toUpperCase()}
//             </div>
//             <div className='status'>
//                 <div className={props.online ? 'status-online' : 'status-offline'}></div>
//                 <div className='status-text' onclick={onclick}>
//                     {props.online ? 'Online' : 'Offline'}
//                 </div>
//             </div>
//         </div>
//     </div>)
// }

class Chat extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            online : props.online
        }
    }
    afterClick = ()=>{
        this.setState({online : !this.state.online})
    }
    render(){
        return (<div className='Contact'>
        <img src={this.props.image} alt={this.props.name} className='avatar' />
        <div>
            <div className='name'>
                {this.props.name.toUpperCase()}
            </div>
            <div className='status'onClick={this.afterClick}>
                <div className={this.state.online ? 'status-online' : 'status-offline'}></div>
                <p className='status-text'  >
                    {this.state.online ? 'Online' : 'Offline'}
                </p>
            </div>
        </div>
    </div>)
    }
}

export default Chat;