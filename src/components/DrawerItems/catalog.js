import React, {useState} from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { TextField, Divider, Typography} from '@mui/material';
import { FormControl, InputLabel, Button, Select, MenuItem, Grid} from '@mui/material';
import withDashboard from '../../HOC/wrappedComponent';

const useStyles = makeStyles((theme) => createStyles({
    toolbar: {
        margin: theme.spacing(0, 12),
    },
    bottom: {
        marginBottom: "20px"
    },
    formcontrol: {
        marginBottom: "20px",
        minWidth: 120,
    },
    clear: {
        marginTop: "10rem"
    },
    root: {
        flexGrow: 1
    }
}))

function Catalog (props){
    const classes = useStyles();
    const [status, setStatus] = useState('');

    const handleChange = (event) => {
      setStatus(event.target.value);
    };
    
    const handleClear = () => {
        console.log()
    }
    const handleCreate = () => {
        console.log()
    }

    return (
        <div >

            <Grid container spacing={2}>
                    
                <Grid
                    item direction="column"
                    container
                    justifyContent="center"
                    alignItems="center"        
                >
                    <Grid item >
                        <Typography variant="h6" color="primary">New Entity Catalog</Typography>
                    </Grid>

                    <Grid item
                        container
                        direction="row"
                        spacing={2}
                        justifyContent="space-between"
                    >
                        <Grid item xs={12} sm={4}>
                            <form>
                                <label> Name </label>
                                <br />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    id="name"
                                    name="text"
                                    autoComplete="name"
                                    autoFocus
                                    className={classes.bottom}
                                />
                                <br />
                                <TextField
                                    id="outlined-textarea"
                                    rows={4}
                                    placeholder="Description"
                                    multiline
                                    variant="outlined"
                                    className={classes.bottom}
                                />
                                <br />
                                <FormControl variant="outlined" className={classes.formcontrol}>
                                    <label id="demo-simple-select-outlined-label">Status</label>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={status}
                                        onChange={handleChange}
                                        label="Age"
                                    >
                                        <MenuItem value=""> None </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <br />
                                <label>  Valid period: </label>
                                <Grid  item 
                                    container
                                    direction="row"
                                    justifyContent="space-between"
                                    className={classes.bottom}
                                >
                                    <TextField
                                        id="date"
                                        variant="outlined"
                                        type="date"
                                        placeholder="start at"
                                        InputLabelProps={{ shrink: true}}
                                        style={{width: "10rem"}}
                                    />
                                    <TextField
                                        id="date2"
                                        variant="outlined"
                                        type="date"
                                        placeholder="end at"
                                        InputLabelProps={{shrink: true}}
                                        style={{width: "10rem"}}
                                    />
                                </Grid>
                                <label> Version </label>
                                <br />
                                <TextField id="outlined-basic2" variant="outlined" />
                            </form>
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item xs={12} sm={4}>
                            <form>
                                <label> Catalogs </label>
                                <br />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    id="text"
                                    label="Name"
                                    name="text"
                                    autoComplete="name"
                                    autoFocus
                                    className={classes.bottom}
                                />
                                <br />
                                <TextField
                                    id="outlined-textarea2"
                                    rows={4}
                                    placeholder="Description"
                                    multiline
                                    variant="outlined"
                                    className={classes.bottom}
                                />
                                <br />
                                <FormControl variant="outlined" className={classes.formcontrol}>
                                    <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={status}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">None</MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <br />
                                <TextField
                                    id="outlined-basic"
                                    label="Version"
                                    variant="outlined"
                                    className={classes.bottom}
                                />
                                <br />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Add
                                </Button>
                            </form>
                        </Grid>
                    </Grid>
                    <Grid item sm
                        container
                        direction="row"
                        spacing={2}
                        justifyContent="space-between"
                        className={classes.clear}
                    >
                        <Button variant="outlined" color="primary" onClick={handleClear}>clear</Button>
                        <Button color="primary" variant="contained" onSubmit={handleCreate}>create</Button>
                    </Grid>
                </Grid>
                    
            </Grid>
                
        </div> 
    );
}

export default Catalog;