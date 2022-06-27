import React from 'react';
import FileUpload from "../FileUpload";
import {Button} from "@mui/material";

interface SecondStepProps {
    setPicture: Function;
}

const SecondStep: React.FC<SecondStepProps> = ({setPicture}) => {
    return (
        <FileUpload setFile={setPicture} accept="image/*">
            <Button>Add picture</Button>
        </FileUpload>
    );
};

export default SecondStep;