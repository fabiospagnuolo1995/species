import React from 'react'
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    cnt: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexFlow: "row wrap",
        position: "relative",
        top: "200px",
        "& >p": {
            width: "100%",
            textAlign: "center",
            fontSize: "22px",
            marginBottom: "30px"
        },
        "& >a": {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            textDecoration: "none"
        }
    }
}));

const HomePage = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.cnt}>
            <p>The IUCN Red List is a critical indicator of the health of the world's biodiversity.</p>
            <Link to={"/dashboard"} key={"first"}><Button variant="contained" color="secondary">Click here to know more!</Button></Link>
        </div>
    )
};

export default HomePage;
