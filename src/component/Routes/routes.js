import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import SignUp from '../SignUp.js'
import Create from '../createacc.js'

const Routes = () => (
    <Router>
        <Scene key = "root">
            <Scene key = "SignUp" component = {SignUp}  initial = {true} />
            <Scene key = "Create" component = {Create}  />
        </Scene>
    </Router>
)

export default Routes