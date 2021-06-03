import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActionArea, CardMedia } from '@material-ui/core';
import { useStyles } from './styles';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { store } from '../../../store';

const enhancer = connect(null);

export const DetailPage = enhancer(({ match: { params } }) => {
    const classes = useStyles();
    const { trackedUsers } = store.getState().users;
    const [user, setUser] = React.useState(null);

    useEffect(() => {
        setUser(trackedUsers && trackedUsers[params.id]);
    }, [trackedUsers]);

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image='https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg'
                    title='Contemplative Reptile'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                        {user?.user?.name}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='h3'>
                        Phone:
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='span'>
                        {user?.user?.phone}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='h3'>
                        Hours:
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='span'>
                        {user?.hours}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='h3'>
                        Note:
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='span'>
                        {user?.note}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
});
