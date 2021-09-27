import React, { useState } from "react";
import { TextField, Divider, Typography } from "@mui/material";
import {
  FormControl,
  InputLabel,
  Button,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import AdminDashboard from "../../Admin/admin-dashboard";


function Catalog(props) {
  const [status, setStatus] = useState("");

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleClear = () => {
    console.log();
  };
  const handleCreate = () => {
    console.log();
  };

  return (
    <AdminDashboard>
      <Grid container spacing={2}>
        <Grid
          item
          direction="column"
          container
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h6" color="primary">
              New Entity Catalog
            </Typography>
          </Grid>

          <Grid
            item
            container
            direction="row"
            spacing={2}
            justifyContent="space-between"
          >
            <Grid item xs={12} sm={5}>
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
                  sx={{
                    marginBottom: 2
                  }}
                />
                <br />
                <TextField
                  id="outlined-textarea"
                  rows={4}
                  placeholder="Description"
                  multiline
                  variant="outlined"
                  sx={{
                    marginBottom: 2
                  }}
                />
                <br />
                <FormControl
                  variant="outlined"
                  sx={{
                    marginBottom: 2,
                    minWidth: 120
                  }}
                >
                  <label id="demo-simple-select-outlined-label">Status</label>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={status}
                    onChange={handleStatus}
                  >
                    <MenuItem value=""> None </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <br />
                <label> Valid period: </label>
                <Grid
                  item
                  container
                  direction="row"
                  justifyContent="space-between"
                  sx={{
                    marginBottom: 2
                  }}
                >
                  <TextField
                    id="date"
                    variant="outlined"
                    type="date"
                    placeholder="start at"
                    InputLabelProps={{ shrink: true }}
                    style={{ width: "10rem" }}
                  />
                  <TextField
                    id="date2"
                    variant="outlined"
                    type="date"
                    placeholder="end at"
                    InputLabelProps={{ shrink: true }}
                    style={{ width: "10rem" }}
                  />
                </Grid>
                <label> Version </label>
                <br />
                <TextField id="outlined-basic2" variant="outlined" />
              </form>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs={12} sm={5}>
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
                  sx={{
                    marginBottom: 2
                  }}
                />
                <br />
                <TextField
                  id="outlined-textarea2"
                  rows={4}
                  placeholder="Description"
                  multiline
                  variant="outlined"
                  sx={{
                    marginBottom: 2
                  }}
                />
                <br />
                <FormControl
                  variant="outlined"
                  sx={{
                    marginBottom: 2,
                    minWidth: 120
                  }}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={status}
                    onChange={handleStatus}
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
                  sx={{
                    marginBottom: 2
                  }}
                />
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Add
                </Button>
              </form>
            </Grid>
          </Grid>
          <Grid
            item
            sm
            container
            direction="row"
            spacing={2}
            justifyContent="space-between"
            sx={{
              marginTop: 10
            }}
          >
            <Button variant="outlined" color="primary" onClick={handleClear}>
              clear
            </Button>
            <Button color="primary" variant="contained" onSubmit={handleCreate}>
              create
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </AdminDashboard>
  );
}

export default Catalog;
