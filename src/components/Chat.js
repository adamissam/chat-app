import React from 'react';
import './Chat.css'

function Chat(props) {

    return (<div className='Contact'>
        <img src={props.image} alt={props.name} className='avatar' />
        <div>
            <div className='name'>
                {props.name}
            </div>
            <div className='status'>
                <div className={props.text ? 'status-online' : 'status-offline'}></div>
                <div className='status-text'>
                    {props.text ? 'Online' : 'Offline'}
                </div>
            </div>
        </div>
    </div>)
}
export default Chat;