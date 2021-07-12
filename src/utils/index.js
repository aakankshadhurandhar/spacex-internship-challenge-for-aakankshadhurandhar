import React from 'react';
import {Button} from "semantic-ui-react"
import moment from 'moment'

const FormattedDate=(utcdate)=>{
    return moment(utcdate).utc().format("DD MMMM YYYY HH:mm");
}

export {FormattedDate};