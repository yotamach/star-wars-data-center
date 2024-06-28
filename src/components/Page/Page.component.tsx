import { Box, Typography } from '@mui/material';

interface PageProps {
    title: string;
    children?: React.ReactNode
}

export const Page = ({ title, children }: PageProps) => {

    return (
        <Box p={5}>
            <Typography variant={'h5'}>{title}</Typography>
            <br />
            {children}
        </Box>
    )   
}