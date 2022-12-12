import React from 'react'
import CircularProgress from "@material-ui/core/CircularProgress";
import {MessageScreen, TYPE_SUCCESS} from "../Components/MessageScreen";


export default function LoadingScreen(props) {
    const {message} = props;
    return (
        <MessageScreen
            type={TYPE_SUCCESS}
            message={message ? message : "Loading"}
            icon={<CircularProgress size={80}/>}
        />
    )
}
