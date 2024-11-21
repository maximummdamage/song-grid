'use client';

import GameGridCell from '@/components/game-grid-cell';
import { Box, Container, Typography } from '@mui/material';

const Home = () => {
    return (
        <Container maxWidth='md'>
            <Box>
                <Box className='game-box'>
                    <div />

                    <Box className='game-column-header'>
                        <Typography className='game-header'>Column 1</Typography>
                        <Typography className='game-header'>Column 2</Typography>
                        <Typography className='game-header'>Column 3</Typography>
                    </Box>

                    <Box className='game-row-header'>
                        <Typography className='game-header'>Row 1</Typography>
                        <Typography className='game-header'>Row 2</Typography>
                        <Typography className='game-header'>Row 3</Typography>
                    </Box>

                    <Box className='game-grid-box'>
                        <GameGridCell />
                        <GameGridCell />
                        <GameGridCell />

                        <GameGridCell />
                        <GameGridCell />
                        <GameGridCell />

                        <GameGridCell />
                        <GameGridCell />
                        <GameGridCell />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default Home;
