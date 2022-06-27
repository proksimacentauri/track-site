import React from 'react';
import FileUpload from "../FileUpload";
import {Button} from "@mui/material";

interface ThirdStepProps {
    setAudio: Function;
}

const ThirdStep: React.FC<ThirdStepProps>  = ({setAudio}) => {
    return (
        <FileUpload setFile={setAudio} accept="audio/*">
            <Button>Add audio</Button>
        </FileUpload>
    );
};

export default ThirdStep;