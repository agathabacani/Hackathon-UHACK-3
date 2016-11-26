import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { Input, Button, Card, Spinner } from '../../Components/';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errMsg: '',
            txtEmail: '',
            rememberMe: false,
            isError: '',
            txtPassword: '',
            txtDisplayName: '',
            isFormLoading: false
        };
    }
    btnRender() {
        if (this.state.isFormLoading) {
            return <Spinner />;
        } else {
            return <Button
                raised
                small
                onPress={() => this.registerUser()}
                title='SIGN UP' />;
        }
    }
    registerUser() {
        this.setState({
            isFormLoading: true,
            errMsg: ""
        });


        setTimeout(() => {
            if (true) {
                this.setState({
                    isError: true,
                    isFormLoading: false,
                    errMsg: "ERROR MESSAGE"
                })
            }
        }, 1000);

    }
    clickChkBox(x) {
        this.setState({
            rememberMe: !x
        });
    }
    renderErrorMsg() {
        return (
            <Text>{this.state.errMsg}</Text>
        );
    }
    render() {
        const { container, btnWrapper, errorMsgWrapper } = styles;
        return (
            <View style={container}>
                <Card title="REGISTRATION" titleStyle={{ fontSize: 25 }}>
                    <Input label="Email" onChangeText={txtEmail => this.setState({ txtEmail })} />
                    <Input label="Password" onChangeText={txtPassword => this.setState({ txtPassword })} />
                    <View style={btnWrapper}>
                        {this.btnRender()}
                    </View>
                    <View style={styles.errorMsgWrapper}>
                        {this.state.isError ? this.renderErrorMsg() : null}
                    </View>
                    <CheckBox
                        title='Remember Me'
                        onPress={() => this.clickChkBox(this.state.rememberMe)}
                        checked={this.state.rememberMe}
                        />
                </Card>
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
    }
};

export { Registration };
