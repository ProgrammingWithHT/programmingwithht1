import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useDispatch } from 'react-redux';
import moment from 'moment'
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { likePost, deletePost } from '../../../actions/posts';

export const Post = (props) => {

  const dispatch = useDispatch()

  return (
    <Card sx={{ width: 345, marginTop: 5 }} >
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={() => props.setCurrentId(props.posts._id)}>
            <MoreVertIcon />
          </IconButton>
        }
        title={props.posts.creator}
        subheader={moment(props.posts.createdAt).fromNow()}
      />
      <CardMedia
        sx={{ height: 240 }}
        image={props.posts.selectedFile}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom component="p">
          {props.posts.tags}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.posts.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.posts.message}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size="small" onClick={() => dispatch(likePost(props.posts._id))}><ThumbUpIcon />LIKE {props.posts.likeCount}</Button>
        <Button size="small" onClick={() => dispatch(deletePost(props.posts._id))}><DeleteIcon />DELETE</Button>
      </CardActions>
    </Card>
  )
}
