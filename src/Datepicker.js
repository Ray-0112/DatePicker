import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));
export default function DatePickers() {
 const classes = useStyles();
 return (
    <form className={classes.container} noValidate>
        <TextField
            id="date"
            label="生日"
            type="date"
            color="secondary"
            defaultValue="2017年05月24日"
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
        />
    </form>
 ); }