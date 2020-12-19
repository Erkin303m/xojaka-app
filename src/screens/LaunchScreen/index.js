import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Routines} from "services/api";
import get from 'lodash/get'
import Launch from "./index_without_connect"
import NavigationService from 'navigators/NavigationService';
import {LOGOUT} from 'store/constants';
import Components from 'components'
import i18next from 'i18next';
import { Api } from "services/api"

class LaunchScreen extends Component {
    componentDidMount () {
        let token = get(this.props, 'login.token.token', null);
        let baseUrl = get(this.props, 'baseUrl', null);
        console.log("this.props", this.props)
        if(baseUrl)
            Api.setBaseURL(baseUrl)
        if (token){
            setTimeout(()=>{
                this.getUserData()
            },500)
        }else{
            setTimeout(()=>{
                this.props.navigation.reset({
                    index:0,
                    routes: [{ name: 'login'}]
                })
            }, 500)
        }
    }
    getUserData(){
        Routines.user.getMe({
            request: {}
        }, this.props.dispatch)
            .then(
                (successPayload) => {
                    this.props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'buttonScreen'}]
                    })
                },
                (failurePayload) => {
                    console.log("failurePayload", failurePayload);
                    let status = get(failurePayload, 'message.status', 404);
                    if(status === 401){
                        NavigationService.reset('login', 0);
                        this.props.dispatch({type: LOGOUT});
                        this.removeOneSignalId()
                    }
                    else {
                        if(failurePayload.message === "NETWORK_ERROR"){
                            Components.Toast.show();
                        }
                        let routeName = 'buttonScreen';
                        NavigationService.reset(routeName, 0)
                    }
                }
            )
    }
    removeOneSignalId(){
        // Routines.user.removeOneSignalId({request: {
        //         data: {account_id: this.props.oneSignalId}
        //     }}, this.props.dispatch)
    }
    render () {
        return (
            <Components.Layout>
                <Launch/>
            </Components.Layout>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        login: state.profile.data,
        baseUrl: state.profile.baseUrl
    }
};
export default connect(mapStateToProps)(LaunchScreen)
