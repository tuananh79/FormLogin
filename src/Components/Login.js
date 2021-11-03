import React from "react";
import login from './Login.scss';
import '../resources/fontawesome/css/all.css';


class Login extends React.Component {

    state = {
        username: '',
        pass: '',
        isShowPassword: false
    }
    handleChangeU = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleChangeP = (event) => {
        this.setState({
            pass: event.target.value
        })
    }
    handleShowHidePass = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword,

        })
    }

    handleLogin = (event) => {

        this.setState({
            username: this.state.username,
            pass: this.state.pass
        })
        console.log(`check state `, this.state)
    }
    render() {
        return (
            <>
                {console.log(`check change`, this.state)}

                <div className="Form">
                    <h1>Login</h1>
                    <div className="inputUP">
                        <label>Username</label><br />
                        <input value={this.state.username} name="uname" required placeholder="Vui lòng nhập username" onChange={(event) => this.handleChangeU(event)}></input><br />
                        <label>Password</label><br />
                        <div className="control">
                            <input required
                                type={this.state.isShowPassword ? 'text' : 'password'}
                                className="eye"
                                placeholder="Vui lòng nhập password"
                                onChange={(event) => this.handleChangeP(event)}>

                            </input>
                            <span
                                onClick={() => this.handleShowHidePass()}>
                                <i class={this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i>
                            </span>
                        </div>
                        <br /><br />
                        <button type="submit" onClick={(event) => this.handleLogin(event)}>Login</button>

                    </div>
                    <div className="siwith">
                        <label>Or sign in with:</label>
                    </div>
                    <div className="icon">
                        <a href="#">
                            <div className="fb">
                            </div>
                        </a>
                        <a href="#">
                            <div className="email">

                            </div>
                        </a>
                        <a href="#">
                            <div className="tw">

                            </div>

                        </a>


                    </div>

                </div>

            </>
        )
    }
}

export default Login;