import React from 'react'
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

export const TYPE_SUCCESS = 0;
export const TYPE_WARNING = 1;
export const TYPE_ERROR = 2;

const useStyles = makeStyles((theme) => ({
    title: {
        padding: theme.spacing(3.5)
    },
    icon: {
        padding: theme.spacing(0, 3.5, 3.5, 3.5),
        fontSize: '90px'
    }
}));

export const MessageScreen = (props) => {
    const {message, icon, buttons, type} = props;
    const classes = useStyles();

    return (
        <Grid container direction="column" alignItems="center">
            <Grid item>
                <Typography color='textSecondary' variant="h2" className={classes.title}>
                    {message}
                </Typography>
            </Grid>
            {icon &&
            <Grid item>
                <Typography component="div" color={type === TYPE_ERROR ? 'error' : 'textSecondary'}
                            className={classes.icon}>
                    {icon}
                </Typography>
            </Grid>
            }
            {buttons &&
                <Grid container item justifyContent="center" spacing={2}>
                    {buttons.map((button, index) => (
                        <Grid item key={index}>
                            {button}
                        </Grid>
                    ))}
                </Grid>
            }
        </Grid>
    )
};

