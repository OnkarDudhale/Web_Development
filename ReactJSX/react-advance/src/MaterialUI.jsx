import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

export default function MaterialUI() {
    let [showError, setShowError] = useState(false);
    const handleError = () => {
        setShowError((err) => {
            return err ? false : true;
        })
    }
    return (<>
        <Button color='success' onClick={() => alert('button is clicked !')} variant="contained" >click me !</Button>
        <br />
        <br />
        <Button color='error' onClick={handleError} variant='outlined' startIcon={<DeleteIcon />}>delete !</Button>
        <br /><br /><br />
        {showError ? <Alert variant='outlined' severity="error">This cannot be delete !</Alert> : null}
    </>)
}