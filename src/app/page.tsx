'use client';

import GameGridCell from '@/components/game-grid-cell';
import SongEntryDialog from '@/components/song-entry-dialog';
import { Box, Container, Typography } from '@mui/material';
import React, { useState, type ReactNode } from 'react';

const Home = () => {
    const [songEntryDialogOpen, setSongEntryDialogOpen] = useState(false);
    const [selectedCellIndex, setSelectedCellIndex] = useState(-1);

    return (
        <Container maxWidth='md'>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box className='game-box'>
                    <div />

                    <Box className='game-column-header'>
                        <Typography className='game-header'>
                            {'Column 1'}
                        </Typography>
                        <Typography className='game-header'>
                            {'Column 2'}
                        </Typography>
                        <Typography className='game-header'>
                            {'Column 3'}
                        </Typography>
                    </Box>

                    <Box className='game-row-header'>
                        <Typography className='game-header'>
                            {'Row 1'}
                        </Typography>
                        <Typography className='game-header'>
                            {'Row 2'}
                        </Typography>
                        <Typography className='game-header'>
                            {'Row 3'}
                        </Typography>
                    </Box>

                    <Box className='game-grid-box'>
                        {(() => {
                            const NUM_CELLS: number = 9;
                            const array: ReactNode[] = [];

                            for (let i: number = 0; i < NUM_CELLS; i += 1) {
                                array.push(
                                    <GameGridCell
                                        key={i}
                                        index={i}
                                        onClick={() => {
                                            setSongEntryDialogOpen(true);
                                            setSelectedCellIndex(i);
                                        }}
                                    />,
                                );
                            }

                            return array;
                        })()}
                    </Box>
                </Box>
            </Box>
            <SongEntryDialog
                open={songEntryDialogOpen}
                setOpen={setSongEntryDialogOpen}
            />
        </Container>
    );
};

export default Home;
