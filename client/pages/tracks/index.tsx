import MainLayout from '../../layouts/MainLayout'
import {Card, Grid, Button, Box, TextField} from "@mui/material";
import {useRouter} from "next/router";
import TrackList from "../../components/TrackList";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchTracks, searchTracks} from "../../store/action-creators/track";
import {NextThunkDispatch, wrapper} from "../../store";
import {useState} from "react";
import {useDispatch} from "react-redux";

const Index = () => {
    const router = useRouter();
    const {tracks, error} = useTypedSelector(state => state.track)
    const [query, setQuery] = useState<string>('');
    const dispatch = useDispatch() as NextThunkDispatch;
    const [timer, setTimer] = useState(null);

   const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        if (timer) {
            clearTimeout(timer);
        }
        setTimeout(async () => {
            await dispatch(searchTracks(e.target.value));
        }, 500);
   }

    if (error) {
        return (
            <>
                <MainLayout>
                    <Grid container justifyContent="center">
                       <h1>{error}</h1>
                    </Grid>
                </MainLayout>
            </>
        );
    }

    return (
        <>
            <MainLayout title="list of tracks">
             <Grid container justifyContent="center">
                <Card style={{ width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent="space-between">
                            <h1>spisok trekov</h1>
                            <Button onClick={() => router.push('/tracks/create')}>Create</Button>
                    </Grid>
                    </Box>
                    <TextField
                        fullWidth
                        value={query}
                        onChange={search}
                    />
                    <TrackList tracks={tracks} />
                </Card>
             </Grid>
            </MainLayout>
        </>
    )
}

export default Index;

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchTracks())
})