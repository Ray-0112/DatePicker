import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import React, { useState } from "react";
import {KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 200 ,
        marginLeft: 600,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));
export default function Transfer(){
    const [startDate,setDate] = useState(new Date());
    var yr = startDate.getFullYear()-1911;
    const classes = useStyles();
    return(
        <div>
        <form className = {classes.container} noValidate>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker 
                    variant = "filled"
                    value = {startDate}
                    label = "日期"
                    animateYearScrolling = "true"
                    allowKeyboardControl ="true"
                    onChange = {setDate}
                    format = { "民國" + yr + "年" + "-MM月-dd號" }
                    InputLabelProps = {{
                        shrink: true,
                    }}
                />
            </MuiPickersUtilsProvider>
        </form>
        </div>
    );
}