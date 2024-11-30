import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from '@mui/material';
import { type Dispatch, type SetStateAction } from 'react';

const SongEntryDialog = ({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <Dialog
            open={open}
            onClose={() => {
                setOpen(false);
            }}
            fullWidth
            PaperProps={{ sx: { backgroundColor: 'var(--tertiary)' } }}
            sx={{ textAlign: 'center' }}
        >
            <DialogTitle
                sx={{
                    backgroundColor: 'var(--background)',
                    color: 'var(--foreground)',
                }}
            >
                {'Pick a Song'}
            </DialogTitle>
            <DialogContent
                sx={{
                    backgroundColor: 'var(--tertiary)',
                    color: 'var(--foreground)',
                }}
            >
                <Typography>{'Hello, World!'}</Typography>
            </DialogContent>
            <DialogActions
                sx={{
                    backgroundColor: 'var(--tertiary)',
                    color: 'var(--foreground)',
                }}
            >
                <Button
                    onClick={() => {
                        setOpen(false);
                    }}
                    sx={{
                        color: 'var(--foreground)',
                    }}
                >
                    {'Close'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default SongEntryDialog;
