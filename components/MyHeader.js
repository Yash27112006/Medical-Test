import * as React from 'react';
import {Header, Icon} from 'react-native-elements';


const MyHeader = props => {
    return (
        <Header 
            centerComponent={{ 
                text: props.title, 
                style: { color: 'yellow', fontSize:18, fontWeight:"bold", } 
            }}
            backgroundColor = "black"
      />
    )
}

export default MyHeader;