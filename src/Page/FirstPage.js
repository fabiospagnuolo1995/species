import React, {useState, useEffect} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import ListRegions from "../Components/ListRegions";
import ListSpecies from "../Components/ListSpecies";
import axios from "axios";
import {makeApiRegionUrl} from "../HttpService";
import LoadingScreen from "./LoadingPage";

const useStyles = makeStyles((theme) => ({
    main: {
        flexGrow: 1,
        overflow: 'hidden',
        marginTop: '30px',
        padding: '0 20px'
    },
}));

const FirstPage = (props) => {

    const classes = useStyles();
    const [regions, setRegions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        axios.get(makeApiRegionUrl()).then( response =>  {
            setRegions(response.data.results);
        }).catch((error) => {
            console.log("ERROR", error);
            setRegions("Error Loading contents");
        }).finally(() => setLoading(false));
    }, []);

    return (
        loading ?  <LoadingScreen />
        :
        <Grid container item className={classes.main} justifyContent="center">
            <Grid item xs={12} md={6} lg style={{padding: '8px', height: '100%', flexBasis: "50%"}}>
                <ListRegions regions={regions}/>
            </Grid>
            <Grid item xs={12} md={6} lg style={{padding: '8px', height: '100%', flexBasis: "50%"}}>
                <ListSpecies />
            </Grid>
        </Grid>
    )
};

export default FirstPage;