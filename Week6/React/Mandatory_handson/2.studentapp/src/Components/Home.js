import React,{Component} from "react";
class Home extends Component
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
        <h3>Welcome to the Home Page of Student Management Portal</h3>
        </div>
        );
    }
}
export default Home;