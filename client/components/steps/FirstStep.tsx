import React from 'react';
import {Grid, TextField} from "@mui/material";

const FirstStep = ({name, artist, text}) => {
    return (
        <Grid container direction="column" style={{padding: 20}}>
            <TextField
                {...name}
                style={{margin: 10}}
                label="Song title"
            />
            <TextField
                {...artist}
                style={{margin: 10}}
                label="Artist"
            />
            <TextField
                {...text}
                style={{margin: 10}}
                label="Lyrics"
                multiline
                rows={3}
            />
        </Grid>
    );
};

export default FirstStep;