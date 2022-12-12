import React from 'react'
import {Button} from "@material-ui/core";
import {withTheme} from "@material-ui/core/styles";
import {MessageScreen, TYPE_WARNING} from "../Components/MessageScreen";
import {useHistory} from 'react-router-dom';


const NotFoundScreen = withTheme((props) => {

    const {theme} = props;
    const history = useHistory();

    const goToHomepage = () => {
        history.replace("/");
    };

    return (
        <MessageScreen
            type={TYPE_WARNING}
            message={"Not Found"}
            icon={<div style={{borderRadius: '50%',
                               height: '140px',
                               width: '140px',
                               lineHeight: '130px',
                               fontSize: '60px',
                               textAlign: 'center',
                               borderWidth: '5px',
                               borderStyle: 'solid',
                               borderColor: theme.palette.secondary
            }}>
                404
            </div>}
            buttons={[
                <Button variant={"contained"}
                        color={"primary"}
                        size={"large"}
                        onClick={goToHomepage}>
                    Go to Home
                </Button>
            ]}
        />
    )
});

export default NotFoundScreen;
