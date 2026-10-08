import { Form } from "./components/Form/Form";
import { Posts } from "./components/Posts/Posts";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper'
import logo from './images/memories.png'
import Grid from '@mui/material/Grid'
import { useEffect } from "react";
import {useDispatch} from 'react-redux'
import {getPosts} from './actions/posts'
import { useState } from "react";

const App = () => {


  const [currentId, setCurrentId] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);


  return (
    <div>
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '2%/50%', border: '1px solid black', marginTop: '1rem' }} >
        <Typography variant="h4" gutterBottom sx={{ marginTop: '1rem' }}>
          ProgrammingWithHT
        </Typography>
        <Paper sx={{ boxShadow: 'none' }}>
          <img src={logo} alt="" height='50px' />
        </Paper>
      </Container>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Posts setCurrentId={setCurrentId}></Posts>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId}></Form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
