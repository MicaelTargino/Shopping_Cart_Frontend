import React from 'react';
import UserLists from './UserLists';

export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
    
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.logout = this.logout.bind(this);
      }
    
      handleChangeUsername(event) {
        this.setState({username: event.target.value});
      }
    
      handleSubmit(event) {
        var url = 'http://127.0.0.1:8000/api-token-auth';
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: this.state.username, password: this.state.password })
        };
        fetch(url, requestOptions)
          .then(response => response.json())
          .then(data => {
            localStorage.setItem('token', data.token);
            this.setState({token: data.token});
        });
    
        event.preventDefault();
        }

      handleChangePassword(event) {
          this.setState({password: event.target.value})
      }

      logout() {
        localStorage.removeItem('token');
        this.setState({token: null});
      }


    
      render() {
        var token = localStorage.getItem('token');
        var styleForm = {display: 'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'};
        var stylebtn = {marginTop: '5px',border: 'none', padding: '5px 15px', background: '#a9cec4', borderRadius: '10px'}
        if(!token) {
          return (
            <form style={styleForm} onSubmit={this.handleSubmit}>   
              <h2 style={{color: 'white'}}>Login</h2>
              <input placeholder="Username" type="text" value={this.state.username} onChange={this.handleChangeUsername} />
              <input placeholder="Password" type="password" value={this.state.password} onChange={this.handleChangePassword} />
              <input style={stylebtn} type="submit" value="Submit" />
            </form>
          );
        } else {
          return (
            <>
            <UserLists />
            <button onClick={() => this.logout()}>Logout</button>
            </>
          )
        }
       
      }
}