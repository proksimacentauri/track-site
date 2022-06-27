import React, {useState} from 'react';
import {Button, Grid} from "@mui/material";
import MainLayout from "../../layouts/MainLayout";
import StepWrapper from "../../components/StepWrapper";
import FirstStep from "../../components/steps/FirstStep";
import SecondStep from "../../components/steps/SecondStep";
import ThirdStep from "../../components/steps/ThirdStep";
import {useInput} from "../../hooks/useInput";
import {useRouter} from "next/router";
import axios from "axios";

const create = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);
    const name = useInput('');
    const artist = useInput('');
    const text = useInput('');
    const router = useRouter();

    const forward = () => {
        if(activeStep !== 2 ) {
            setActiveStep(prev => prev + 1);
        } else {
            const formData = new FormData();
            formData.append('name', name.value);
            formData.append('artist', artist.value);
            formData.append('text', text.value);
            formData.append('picture', picture);
            formData.append('audio', audio);
            console.log(formData, name.value, artist.value, text.value);
            axios.post('http://localhost:5000/tracks', formData)
                .then(res => router.push('/tracks'))
                .catch(e => console.log(e)
                )

        }
    }

    const backward = () => {
        setActiveStep(prev => prev - 1);
    }


    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
               {activeStep === 0 && <FirstStep name={name} artist={artist} text={text}/>}
                {activeStep === 1 && <SecondStep setPicture={setPicture}/>}
                {activeStep === 2 && <ThirdStep setAudio={setAudio}/>}
            </StepWrapper>
            <Grid container justifyContent="space-between">
                <Button disabled={activeStep === 0 } onClick={() => backward()}>back</Button>
                <Button onClick={() => forward()}>forward</Button>
            </Grid>
        </MainLayout>
    );
};

export default create;