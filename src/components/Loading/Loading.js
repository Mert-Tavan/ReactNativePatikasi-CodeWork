import React from 'react'
import Lottie from 'lottie-react-native'

export default () => {
    return <Lottie source={require('../../assets/loading.json')} autoPlay style={{backgroundColor: 'white'}} />
}