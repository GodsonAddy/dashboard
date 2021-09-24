import React, { useState} from 'react';
import {Button, Avatar, CssBaseline, FormControlLabel} from '@mui/material';
import { TextField, CircularProgress, Collapse, Checkbox, Link } from '@mui/material';
import {Box, Typography, Container, Alert} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { makeStyles, createStyles } from '@mui/styles';
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="primary" href="https://vodafone.com.gh/home/">
        Vodafone Ghana
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => createStyles({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwdValid, setPwdValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [submitState, setSubmitValid] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [open, setOpen] = useState(true);
  const [checked, setChecked] = useState(false);

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  function handlePasswordChange(e) {
    let pwdPassed = e.target.value ? true : false;
    let submitPassed = emailValid && pwdValid;
    setPassword(e.target.value);
    setPwdValid(pwdPassed);
    setSubmitValid(!submitPassed);
  }

  function handleEmailChange(e) {
    let emailPassed = e.target.value ? true : false;
    let submitPassed = pwdValid && emailValid;
    setEmail(e.target.value);
    setEmailValid(emailPassed);
    setSubmitValid(!submitPassed);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      email,
      password,
      checked
    } 
    setLoading(true)
    
    try{
      const res = await axios.post('http://localhost:5000/api/login', payload)
      setLoading(false)
      console.log(res.data);
      setShowSuccess(true);
      setEmail("");
      setPassword("");
      setChecked(checked)
      localStorage.setItem("isAuthenticated", "true");
      window.location.pathname = "/dashboard";
    }
    catch(err) {
      setLoading(false);
      console.log(err);
      setShowError(true);
      setEmail("");
      setPassword("");
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <div>
          <Collapse in={open}>
            { showSuccess &&
              <Alert variant="filled" severity="success" onClose={() => { setOpen(false); } }>
                Login was successful!
              </Alert>
            }
  
            { showError &&
              <Alert variant="filled" severity="error" onClose={() => { setOpen(false); } }>
                Invalid Email or Password!
              </Alert>
            }
          </Collapse>
        </div>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        {loading && <CircularProgress color="secondary" />}
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleEmailChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePasswordChange} />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            checked={checked}
            onChange={handleChecked}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={submitState}
          >
            Log In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}