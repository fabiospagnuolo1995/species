import React from 'react';
import {useDispatch} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {List, ListItem} from "@material-ui/core";
import Box from '@mui/material/Box';
import axios from "axios";
import {makeApiSpeciesByRegion} from "../HttpService";
import {addWidgetItem, addWidgetLoader} from "../redux/actions/speciesActions";

const useStyles = makeStyles((theme) => ({
    '@global': {
        '*::-webkit-scrollbar': {
          width: '0.6em',
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)',
          outline: '1px solid grey',
          borderRadius: '50px'
        }
    },
    btn: {
        width: '100%',
        borderLeft: '0',
        borderRight:'0',
        padding: '20px',
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
        cursor: 'pointer',
    }
}));

const ListRegions = (props) => {
    const {regions} = props;
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClick = (event) => {
        dispatch(addWidgetLoader(true));
        axios.get(makeApiSpeciesByRegion(event.target.id)).then(response => {
            dispatch(addWidgetItem(response.data));
        }).catch((error) => {
            console.log("ERROR", error);
            dispatch(addWidgetItem({result:"Error Loading contents", count:"error"}));
        }).finally(() => dispatch(addWidgetLoader(false)));
    }

    return (
        <Box component="div" sx={{ p: 2, border: '1px solid grey', height:'500px', overflowY: 'scroll', boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)' }}>
            { regions === "Error Loading contents" ? <p>Error Loading content</p>
                :
                <List>
                { regions.map((el) => ( 
                    <ListItem key={el.identifier}>
                        <button className={classes.btn} onClick={handleClick} id={el.identifier}>{el.name}</button>
                    </ListItem>
                ))}
                </List>
            }
        </Box>
    );
};

export default ListRegions;