import React from 'react';
import { makeStyles, createStyles} from '@mui/styles';
import withDashboard from '../../HOC/wrappedComponent';
import { Typography } from '@mui/material';

const useStyles = makeStyles((theme) => createStyles({
    dashboard: {
        flexGrow: 1,
        padding: theme.spacing(20,15),
    },
}))

const Dashboard = () => {
    const classes = useStyles();
    
    return (
        <div>
        
            <Typography variant="h6" color="primary">Today</Typography>
        </div>
    );
}


export default Dashboard;