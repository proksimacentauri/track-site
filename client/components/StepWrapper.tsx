import React from 'react';
import {Container, Stepper, Step, StepLabel, Grid, Card} from "@mui/material";

interface StepWrapperProps {
    activeStep: number;
}

const steps = ['information about song', 'upload picture', 'upload audio']

const StepWrapper: React.FC<StepWrapperProps> = ({activeStep, children}) => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) =>
                <Step
                    key={index}
                    activeStep={activeStep > index}
                >
                    <StepLabel>{step}</StepLabel>
                </Step>
                )}
            </Stepper>
            <Grid container justifyContent="center" style={{margin: '70px 0', height: 270}}>
             <Card style={{width: 600}}>
                 {children}
             </Card>
            </Grid>
        </Container>
    );
};

export default StepWrapper;