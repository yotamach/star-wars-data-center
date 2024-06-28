import { Page, PeopleTable, PersonModal } from '@components';
import { Grid, Typography, Button } from '@mui/material';
import { useDataCenter } from '@providers';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Category() {
const { category } = useParams();
const { allPeople, fetchPeople } = useDataCenter()
const [openModal, setOpenModal] = useState(false);
const isPeopleCategory = category === 'people';

useEffect(() => {
    if(isPeopleCategory) {
        fetchPeople();
    }
}, [])

return (
    <Page title="Category">
        <Grid container gap={5}>
            <Grid item xs={12}>
                <Typography variant='h6' >{category}</Typography>
            </Grid>
            {isPeopleCategory && <>
                <Grid item xs={12}>
                    <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => setOpenModal(true)}
                    >
                        Create
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <PeopleTable rows={allPeople} />
                </Grid>
            </>}
        </Grid>
        <PersonModal open={openModal} setOpen={setOpenModal} />
    </Page>
);
}