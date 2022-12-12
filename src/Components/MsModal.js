import * as React from 'react';
import Tooltip from "./Tooltip";
import Modal from '@mui/material/Modal';
import {Info as InfoIcon} from '@material-ui/icons';
import { IconButton, Box, Typography} from '@material-ui/core';
import axios from "axios";
import {makeApiSpeciesCrMeasures} from "../HttpService";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {
    const {id} = props;
    const [open, setOpen] = React.useState(false);
    const [modalLoading, setModalLoading] = React.useState(false);
    const [measures, setMeasures] = React.useState('');
    const handleOpen = () => {
        setOpen(true);
        setModalLoading(true);
        axios.get(makeApiSpeciesCrMeasures(id)).then(response => {
            let tmp = '';
            (response.data.result &&  response.data.result.length > 0) ?  response.data.result.map((el) => {
                tmp = tmp.concat(el.title + '; ');
                return tmp;
            }) : tmp = 'No measures found';
            setMeasures(tmp);
        }).catch((error) => {
            console.log("ERROR", error);
            setMeasures("Error loading measures");
        }).finally(() => setModalLoading(false));
    };
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Tooltip content={"Click here to see relative conservative measures"}>
                <IconButton onClick={handleOpen} style={{padding: '0 0 0 10px'}}>
                    <InfoIcon />
                </IconButton>
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    { modalLoading ? <p>Loading...</p> 
                        :
                        <>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Conservative Measures
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                {measures}
                            </Typography>
                        </>
                    }
                </Box>
            </Modal>
        </div>
    );
}
