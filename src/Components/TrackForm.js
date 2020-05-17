import React, {useContext} from 'react';
import {Button, Input} from 'react-native-elements';
import Spacer from "./Spacer";
import {Context as LocationContext} from '../Context/LocationContext'
import useSaveTrack from "../Hooks/useSaveTrack";

const TrackForm = () => {
    const {state: {name, recording, locations},
        startRecording,
        stopRecording,
        changeName} = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();
    // console.log(locations.length);
    return <>
        <Spacer/>
        <Input
            placeholder='Enter Name'
            value={name}
            onChangeText={changeName}
        />
        <Spacer>
            {recording? (<Button title="Stop" onPress={stopRecording}/> ):
                (<Button title="Start Recording" onPress={startRecording}/>)
                }
                <Spacer/>
            {!recording && locations.length ? <Button title="Save Recording" onPress={saveTrack}/> : null}
        </Spacer>
    </>
};

export default TrackForm;