import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import Box from '@mui/material/Box';
import {makeStyles} from "@material-ui/core/styles";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import BasicModal from './MsModal';

const useStyles = makeStyles((theme) => ({
    red: {
        color: 'red',
        display: 'flex'
    },
    default: {
        color: 'black'
    },
    inputRoot: {
        alignItems: 'flex-end',
        borderBottom: '1px solid black'
    }
}));

const ListSpecies = (props) => {
    const {species, loading, speciesCount} = props;
    const [filtered, setFiltered]= useState('no Filter checked');
    const classes = useStyles();
    const DefaultItemHeight = 40;
    const renderItem = ({ index, style }) => {
        const specie = filtered === 'no Filter checked' ? species : filtered;
        return (
          <div style={style} className={specie[index].category === 'CR' ? classes.red : classes.default}>
            {specie[index].commonName ? 
                `${species[index].name} (Common name: ${specie[index].commonName}) ${specie[index].category === 'CR' ? " -CR" : ''}`
                :
                `${specie[index].name} ${specie[index].category === 'CR' ? " -CR" : ''}`
            }
            {specie[index].category === 'CR' && <BasicModal  id={specie[index].taxonId}/> }
          </div>
        );
    };
    
    useEffect(()=>{setFiltered("no Filter checked")}, [species]);

    const handleFilter = (event) => {
        event.target.checked ? setFiltered(species.filter(el => el.class === 'MAMMALIA')) : setFiltered("no Filter checked");
    };

    return (
        <Box component="div" sx={{ p: 2, border: '1px solid grey', height:'500px', boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'}}>
        {
            species.length === 0 && !loading ? <p style ={{textAlign: 'center'}}>Select a region from the list beside and discover the related species</p>
            :
            loading ? <p style ={{textAlign: 'center'}}>Loading...</p> 
            :
            <>
            <FormGroup classes={{root: classes.inputRoot}}>
                <FormControlLabel control={<Checkbox onChange={handleFilter}/>} label="Filter by mammal class" />
            </FormGroup>
            { species.length === 0 || (filtered !== "no Filter checked" && filtered.length === 0) ? <p style={{textAlign: 'center'}}>No species Found</p>
                :
                <AutoSizer disableHeight>
                    {({ width }) => (
                    <List
                        height={457}
                        itemCount={filtered === 'no Filter checked' ? speciesCount : filtered.length}
                        itemSize={DefaultItemHeight}
                        width={width}
                        overscanCount={5}
                    >
                        {renderItem}
                    </List>
                    )}
                </AutoSizer>
            }
            </>
        }
        </Box>
    );
};

const mapStateToProps = (state) => ({
    loading: state.speciesStore.loading,
    species: state.speciesStore.species,
    speciesCount: state.speciesStore.speciesCount
});

export default connect(mapStateToProps)(ListSpecies);