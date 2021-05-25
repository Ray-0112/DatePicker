import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import React, { useState } from "react";
import {KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"

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
export default function Transfer(){
    const[startDate,setDate]=useState(new Date());
    var Y = startDate.getFullyear - 1911;
    const style = useStyles();
    return(
        <div>
        <form className = {style.container} noValidate>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker 
                    variant="inline"
                    value={currentTime}
                    label="日期"
                    onChange={onClick}
                    format={"民國"+Y+"年"+" - MM月 - dd號"}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>
        </form>
        </div>
    );
}