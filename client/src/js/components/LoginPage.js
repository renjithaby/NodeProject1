/**
 * Created by rabby on 20/08/17.
 */
import React from "react";


export class LoginPage extends React.Component
{

    constructor(props){
        super(props);
        this.state = {r_username :"username", r_password :"password", l_username :"", l_password :""};
    }

    componentDidMount(){
       console.log("nextProps.........");
       console.log(this.props.usersList);
       console.log(this.props.authData);
       console.log("props.authData.userLogin");
       console.log(this.props.authData.userLogin);

       //this.props.router.push('/');
    }
    componentWillReceiveProps(props){
       console.log("nextProps.........");
       console.log(props.usersList);
       console.log(props.authData);
       console.log("props.authData.userLogin");
       console.log(props.authData.userLogin);
        if(props.authData.userLogin){
            this.props.history.push('/Home/Add');
        }
       //this.props.router.push('/');
    }

    handleRUserNameChange(event) {
        this.setState({r_username: event.target.value});
    }

    handleRPasswordChange(event) {
        this.setState({r_password: event.target.value});
    }

    handleLUserNameChange(event) {
        this.setState({l_username: event.target.value});
    }

    handleLPasswordChange(event) {
        this.setState({l_password: event.target.value});
    }

    handleRegister(event) {
        event.preventDefault();
        //alert('A name was submitted: ' + this.state.username);

        this.props.registerUser({username:this.state.r_username,password: this.state.r_password});
        return false;
    }

    handleLogin(event) {
        event.preventDefault();
        //alert('A name was submitted: ' + this.state.username);

         //this.props.history.push('/Home');
        this.props.loginUser({username:this.state.l_username,password: this.state.l_password});
        return false;
    }


    render()
    {
        return (

            <div>
                <form onSubmit={this.handleRegister.bind(this)}>
                    <label>
                        Name: <input type="text" value={this.state.r_username} onChange={this.handleRUserNameChange.bind(this)} />
                        PassWord :<input type="text" value={this.state.r_password} onChange={this.handleRPasswordChange.bind(this)} />
                    </label>
                    <input type="submit" value="register" />
                </form>

                <form onSubmit={this.handleLogin.bind(this)}>
                    <label>
                        Name: <input type="text" value={this.state.l_username} onChange={this.handleLUserNameChange.bind(this)} />
                        PassWord :<input type="text" value={this.state.l_password} onChange={this.handleLPasswordChange.bind(this)} />
                    </label>
                    <input type="submit" value="login" />
                </form>
            </div>
        );
    }


}

 //console.log("withRouter ...........");
 //console.log(withRouter);

