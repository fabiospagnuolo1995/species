import React from "react";
import Tooltip from "react-tooltip-lite";
import {withStyles} from "@material-ui/core/styles";
import './style.css';

const styles = ({
    wrapper: {
        maxWidth: 550
    }
});


const CustomTooltip = ({ content, arrow = false, direction = "up-middle", padding = "7px", children, classes, ...props }) => {
    
    return (
        <Tooltip content={( <><div style={{maxWidth: 550, maxHeight:150}}> {content} </div></> )}
            arrow={arrow} direction={direction} padding={padding} tipContentClassName={classes.wrapper} {...props}>
            {children}
        </Tooltip>
    );
};

export default withStyles(styles)(CustomTooltip);
