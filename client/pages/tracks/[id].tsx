import React, {useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";
import axios from "axios";
import {GetServerSideProps} from "next";
import {useInput} from "../../hooks/useInput";
import {ITrack} from "../../types/track";


const TrackPage = ({serverTrack}) => {
    const [track, setTrack] = useState<ITrack>(serverTrack);
    const router = useRouter();
    const username = useInput('');
    const text = useInput('');

    const addComment = async () => {
        try {
            const res = await axios.post('http://localhost:5000/tracks/comment', {
                username: username.value,
                text: text.value,
                trackId: track._id
            })
            setTrack({ ...track, comments: [...track.comments, res.data]})
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <MainLayout title={track.artist + ' - ' + track.name}>
        <Button variant="outlined" style={{fontSize: 32}} onClick={() => router.push('/tracks')}>To form</Button>
            <Grid container style={{margin: '20px 0'}}>
                <img width="200" height="200" src={'http://localhost:5000/' + track.picture} alt="" />
                <div style={{margin: '20px 0'}}>
                    <h1>Song - {track.name}</h1>
                    <h1>Artist - {track.artist}</h1>
                    <h1>Listens - {track.listens}</h1>
                </div>
            </Grid>
            <h1>Lyrics</h1>
            <p>{track.text}</p>
            <h1>Comments</h1>
            <Grid container>
                <TextField {...username} label="Your name" fullWidth />
                <TextField {...text} label="Comment" fullWidth multiline rows={4} />
                <Button onClick={addComment}>Send</Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <>
                        <div>Author: {comment.username}</div>
                        <div>Comment: {comment.text}</div>
                    </>
                )}
            </div>
        </MainLayout>
    );
}

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const response = await axios.get('http://localhost:5000/tracks/' + params.id)
    return {
        props: {
            serverTrack: response.data
        }
    }
}