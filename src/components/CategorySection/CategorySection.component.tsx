import { Card, CardContent, CardActions, Button, Typography, List, ListItem, ListItemText, Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';

interface CategorySectionProps {
    title: string
    items: any[]
}

export const CategorySection = ({ title, items }: CategorySectionProps) => {
    const navigate  = useNavigate();

    const getItems = () => items.slice(0, 3).map((item) => <ListItem sx={{ backgroundColor: '#fff' }} key={item.name || item.title}><ListItemText primary={item.name || item.title} /></ListItem>)
    
    return (
        items.length > 0 && 
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Card sx={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#eee' }}>
                <CardContent sx={{ flex: '1 1 auto' }}>
                    <Typography gutterBottom variant="h4">
                        <b>{title}</b>
                    </Typography>
                    <List>
                        {getItems()}
                    </List>
                </CardContent>
                <CardActions sx={{ mt: 'auto', justifyContent: 'center' }}>
                    <Button variant="contained" color="primary" onClick={() => navigate(`/category/${title}`)}>View all</Button>
                </CardActions>
            </Card>
        </Box>
    )
}