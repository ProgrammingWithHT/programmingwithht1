import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createPost ,updatePost} from '../../actions/posts';
import FileBase from 'react-file-base64';
import { useSelector } from 'react-redux'

export const Form = ({ currentId, setCurrentId }) => {
    const dispatch = useDispatch();
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const clear = () => {
        setCurrentId(0);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createPost(postData));
            clear();
        } else {
            dispatch(updatePost(currentId, postData));
            clear();
        }
    };

    return (
        <Container sx={{ padding: 5 }}>
            <form
                style={{ display: 'flex', flexDirection: 'column', padding: 5 }}
                autoComplete="off"
                noValidate
                onSubmit={handleSubmit}
            >
                <Typography variant='h5' textAlign='center' pb={2}>Creating a Memory</Typography>
                <TextField
                    name="creator"
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                    id="outlined-basic"
                    label="Creator"
                    variant="outlined"
                    sx={{ marginBottom: 1 }} />
                <TextField
                    name="title"
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                    id="filled-basic"
                    label="Title"
                    variant="outlined"
                    sx={{ marginBottom: 1 }} />
                <TextField
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                    name="message"
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    sx={{ marginBottom: 1 }}
                />
                <TextField
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                    name="tags"
                    id="filled-basic"
                    label="Tags (coma separated)"
                    variant="outlined"
                    sx={{ marginBottom: 1 }} />
                <Button variant="contained" sx={{
                    marginBottom: 1, background: 'transparent', boxShadow: 'none', color: 'black', "&:hover": {
                        //you want this to be the same as the backgroundColor above
                        backgroundColor: "#FFF", boxShadow: 'none'
                    }
                }}>

                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </Button>
                <Button variant="contained" sx={{ marginBottom: 1 }} type='submit'>Submit</Button>
                <Button variant="contained" onClick={clear}>Clear</Button>
            </form>
        </Container>
    )
}
