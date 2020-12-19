import React, { Component } from 'react'
import {View, StatusBar, Text} from 'react-native';
import Components from 'components'
import styles from './styles'
import {Routines} from 'services/api';

class ScreenStructure extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    render () {
        return (
            <Components.Layout>
             <Text>
                                              This is screenStructure !!!
                                   </Text>
            </Components.Layout>
        )
    }
}
export default ScreenStructure;
