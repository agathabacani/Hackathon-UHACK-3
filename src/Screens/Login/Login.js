import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';
import firebase from 'firebase';
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
                const {txtEmail, txtPassword} = this.state;
                firebase.auth().signInWithEmailAndPassword(txtEmail, txtPassword)
                    .then(() => Actions.mainEntryPoint())
                    .catch((error) => {

                        switch (error.code) {

                            case 'auth/invalid-email':
                                this.setState({
                                    errorMessage: 'This E-mail address is not valid!',
                                    isFormLoading: false,
                                    isError: true
                                });
                                break;
                            case 'auth/user-disabled':
                                this.setState({
                                    errorMessage: 'This E-mail address has been disabled!',
                                    isFormLoading: false,
                                    isError: true
                                });
                                break;
                            case 'auth/user-not-found':
                                this.setState({
                                    errorMessage: 'This E-mail has not been found!',
                                    isFormLoading: false,
                                    isError: true
                                });
                                break;
                            case 'auth/wrong-password':
                                this.setState({
                                    errorMessage: 'You have entered an incorrect password!',
                                    isFormLoading: false,
                                    isError: true
                                });
                                break;
                        }
                    });
            }
        }, 1000);

    }
    createdAchievements() {
        firebase.database().ref('/achievements/cleaner').set({
            Apprentice: {
                progress: 0
            },
            Adept: {
                progress: 0
            },
            Master: {
                progress: 0
            }
        })
        firebase.database().ref('/achievements/general').set({
            Apprentice: {
                progress: 0
            },
            Adept: {
                progress: 0
            },
            Master: {
                progress: 0
            }
        })
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
                    <Text>Not yet a member? Click <Text onPress={() => this.createdAchievements()} style={regTextStyle}>HERE</Text></Text>
                </Card>
                <Text style={{ alignSelf: 'center' }} onPress={() => Actions.mainEntryPoint()}>FORWARD</Text>
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
