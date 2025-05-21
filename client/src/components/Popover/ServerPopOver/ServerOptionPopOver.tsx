import { Popover } from '@mui/material';
import React from 'react'
import ServerEditOption from './ServerEditOption';

type Props = {}

export default function ServerOptionPopOver({ children, setShowServerOption, showServerOption, setServer, server }) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        // setShowServerOption(false)
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <div aria-describedby={id} onClick={handleClick}>
                {children}
            </div>
            {/* {showServerOption && */}
            <Popover
                slotProps={{
                    paper: {
                        sx: {
                            width: "14rem",
                            marginTop: "2px",
                            p: 2,
                            borderRadius: 2,
                            minWidth: 200,
                            backgroundColor: '#242429',
                            color: '#fff',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                        },
                    },
                }}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <ServerEditOption handleClose={handleClose} server={server} setServer={setServer} setShowServerOption={setShowServerOption} />
            </Popover>
            {/* } */}
        </div>
    );
}