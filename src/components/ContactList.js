import React from 'react'
import Chat from './Chat'


const contactlist = [
    {
        image : 'https://randomuser.me/api/portraits/women/5.jpg',
        name : 'Mia Palmer',
        text : true
    },
    {
        image : 'https://randomuser.me/api/portraits/women/85.jpg',
        name : 'Christine Roberts',
        text : false
    },
    {
        image : 'https://randomuser.me/api/portraits/men/49.jpg',
        name : 'Christopher Duncan',
        text : true
    },
    {
        image : 'https://randomuser.me/api/portraits/women/77.jpg',
        name : 'Emma Young',
        text : true
    },
    {
        image : 'https://randomuser.me/api/portraits/men/20.jpg',
        name : 'Marion Hart',
        text :false
    }

]

const ContactList = () =>{
    return  <div>
        {contactlist.map(item =>{
        return <Chat image={item.image} name={item.name} text={item.text}/> })}
    </div>
   
}

export default ContactList