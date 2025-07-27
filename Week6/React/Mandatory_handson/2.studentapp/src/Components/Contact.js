import React,{Component} from 'react';
class Contact extends Component
{
    render()
    {
        return(
        <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}>
        <h3>Welcome to the Contact Page of Student Management Portal</h3>
        </div>
        );
    }
}
export default Contact;