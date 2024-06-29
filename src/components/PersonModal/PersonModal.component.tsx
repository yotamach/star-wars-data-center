import { Modal, Typography, Box , TextField, Select, MenuItem, Button, Alert } from "@mui/material";
import { useDataCenter } from "@providers";
import { Person } from "@types";
import React, { useEffect } from "react";

interface PersonModalProps {
    setOpen: (open: boolean) => void,
    open: boolean
}

export const PersonModal = ({ open, setOpen }: PersonModalProps) => {
    const [error, setError] = React.useState<string | undefined>();
    const { addPerson } = useDataCenter();

    useEffect(() => {
        setError(undefined);
    },[])

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        const { valid } = validatePerson(data);
        if (valid) {
            addPerson(data as Person);
            setOpen(false);
        }
        return;
      };

      const validatePerson = (obj: Record<string, string>): { valid: boolean; error?: string } => {
        const requiredFields: (keyof Person)[] = ["name", "height", "mass", "gender", "birth_year"];
        const missingFields: string[] = requiredFields.filter(field => !(field in obj) || !obj[field]);
        if (missingFields.length === 0) {
            setError(undefined);
          return { valid: true };
        } else {
            const errorMessage = `Missing fields: ${missingFields.join(", ")}`;
          setError(errorMessage);
          return { valid: false, error: errorMessage};
        }
      };

    return (
        <Modal open={open} onClose={() => setOpen(false)} sx={{ padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <form onSubmit={onSubmit} style={{ width: '400px', backgroundColor: '#fff', padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Typography>Create person</Typography>
                 {error && <Alert variant="filled" severity="error">
                    {error}
                </Alert>}
                <Box gap={2} display={'flex'} flexDirection={'column'}>
                    <TextField name={'name'} label="Name" sx={{ width: '100%' }} />
                    <TextField name={"height"} type="number" label="Height" sx={{ width: '100%' }} />
                    <TextField name={"mass"} type="number" label="Mass" sx={{ width: '100%' }} />
                    <Select name="gender" label="Gender" sx={{ width: '100%' }} defaultValue={''}>
                        <MenuItem value="">Please select a gender</MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                    </Select>
                    <TextField name={"birth_year"} label="Birth year" sx={{ width: '100%' }} />
                </Box>
                <Box display="flex" justifyContent="space-between" flexDirection={'row'}>
                        <Button variant="contained" color="primary" type="submit">Create</Button>
                        <Button variant="contained" color="secondary" type="button" onClick={() => setOpen(false)}>Cancel</Button>
                </Box>
            </form>
        </Modal>
    )
}