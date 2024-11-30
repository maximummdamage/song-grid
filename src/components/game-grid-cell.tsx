import { Button, Card, Typography } from '@mui/material';

const borderRadiusArray: string[] = [
    '8px 0px 0px 0px',
    '0px 0px 0px 0px',
    '0px 8px 0px 0px',
    '0px 0px 0px 0px',
    '0px 0px 0px 0px',
    '0px 0px 0px 0px',
    '0px 0px 0px 8px',
    '0px 0px 0px 0px',
    '0px 0px 8px 0px',
];

const borderThicknessArray: string[] = [
    '2px 1px 1px 2px',
    '2px 1px 1px 1px',
    '2px 2px 1px 1px',
    '1px 1px 1px 2px',
    '1px 1px 1px 1px',
    '1px 2px 1px 1px',
    '1px 1px 2px 2px',
    '1px 1px 2px 1px',
    '1px 2px 2px 1px',
];

const GameGridCell = ({
    index,
    onClick,
}: {
    index: number;
    onClick: CallableFunction;
}) => {
    return (
        <Card
            className='game-grid-cell'
            sx={{
                borderRadius: borderRadiusArray[index],
                color: 'var(--background)',
                backgroundColor: 'var(--tertiary)',
                boxShadow: 'none',
                display: 'grid',
                border: 'solid',
                borderWidth: borderThicknessArray[index],
                borderColor: 'var(--foreground)',
            }}
        >
            <Button
                onClick={() => {
                    (onClick as () => void)();
                }}
                sx={{
                    color: 'var(--background)',
                }}
            >
                <Typography
                    variant='body1'
                    sx={{
                        justifySelf: 'center',
                        alignSelf: 'center',
                    }}
                >
                    {'guess here'}
                </Typography>
            </Button>
        </Card>
    );
};

export default GameGridCell;
