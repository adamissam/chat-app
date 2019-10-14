import React from 'react'
import Chat from './Chat'


const contactlist = [
    {
        image : 'https://randomuser.me/api/portraits/women/5.jpg',
        name : 'Mia Palmer',
        online : true
    },
    {
        image : 'https://randomuser.me/api/portraits/women/85.jpg',
        name : 'Christine Roberts',
        online : false
    },
    {
        image : 'https://randomuser.me/api/portraits/men/49.jpg',
        name : 'Christopher Duncan',
        online : true
    },
    {
        image : 'https://randomuser.me/api/portraits/women/77.jpg',
        name : 'Emma Young',
        online : true
    },
    {
        image : 'https://randomuser.me/api/portraits/men/20.jpg',
        name : 'Marion Hart',
        online :false
    }

]

const ContactList = () =>(
     <div>
        {contactlist.map(item =>(
        <Chat image={item.image} name={item.name} online={item.online}/> ))}
    </div>
   
)


export default ContactList