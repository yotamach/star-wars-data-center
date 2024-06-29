import { CategorySection, Page } from '@components';
import { TextField, Grid, Stack } from '@mui/material';
import { useDataCenter } from '@providers';

export default function Search() {
    const { fetchCategoryItems, categoryItems } = useDataCenter()

    const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        fetchCategoryItems(event.target.value);
    }
    

        return (
        <Page title="Search">
            <Grid container gap={2}>
                <Grid item xs={12}>
                    <p>Welcome to Star Wars data center</p>
                    <p>Here you can search for any category from Star wars</p>
                    <b>Lets begin!</b>
                </Grid>
                <Grid item xs={12}>
                 <TextField label="Search" onChange={onSearch} />
                </Grid>
                <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="stretch"
                spacing={2}
                flexWrap={'wrap'}
                gap={2}
                >
                 {categoryItems.map((item) => <CategorySection key={item.name} title={item.name} items={item.results} />)}
                </Stack>
            </Grid>
        </Page>
        );
        }