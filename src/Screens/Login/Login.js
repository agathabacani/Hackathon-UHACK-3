import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { Input, Button, Card, Spinner } from '../../Components/';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEmail: '',
            txtPassword: '',
            rememberMe: false,
            isFormLoading: false
        };
    }
    clickChkBox(x) {
        this.setState({
            rememberMe: !x
        });
    }
    btnRender() {
        if (this.state.isFormLoading) {
            return <Spinner />;
        } else {
            return <Button onPress={() => this.loginUser()} title="Login" small="true" />
        }
    }
    renderErrorMsg() {
        return (
            <Text>{this.state.errMsg}</Text>
        );
    }
    loginUser() {
        this.setState({
            isFormLoading: true,
            errMsg: ""
        });


        setTimeout(() => {
            if (true) {
                this.setState({
                    isError: true,
                    isFormLoading: false,
                    errMsg: "ERROR"
                });
               alert('Click on FORWARD to bypass login');
            }
        }, 1000);

    }
    render() {
        const { container, regTextStyle, btnWrapper, errorMsgWrapper } = styles;
        const { isError, rememberMe } = this.state;
        return (
            <View style={container}>
                <Card title="LOGIN" titleStyle={{ fontSize: 25 }}>
                    <Input label="Email" onChangeText={txtEmail => this.setState({ txtEmail })} />
                    <Input label="Password" onChangeText={txtPassword => this.setState({ txtPassword })} />
                    <View style={btnWrapper}>
                        {this.btnRender()}
                    </View>
                    <View style={errorMsgWrapper}>
                        {isError ? this.renderErrorMsg() : null}
                    </View>
                    <CheckBox
                        title='Remember Me'
                        onPress={() => this.clickChkBox(rememberMe)}
                        checked={rememberMe}
                        />
                    <Text>Not yet a member? Click <Text onPress={() => Actions.register()} style={regTextStyle}>HERE</Text></Text>
                </Card>
                <Text style={{alignSelf: 'center'}} onPress={() => Actions.mainEntryPoint()}>FORWARD</Text>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    btnWrapper: {
        marginTop: 10,
        marginBottom: 10,
        height: 50
    },
    errorMsgWrapper: {
        height: 10,
        alignItems: 'center',
        marginBottom: 10
    },
    regTextStyle: {
        fontWeight: '600'
    }
};

export { Login };
