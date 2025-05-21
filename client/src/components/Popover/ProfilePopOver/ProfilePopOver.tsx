import * as React from 'react';
import Popover from '@mui/material/Popover';
import EditProfile from './EditProfile';

export default function ProfilePopOver({ children, profile }) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [showStatusOption, setShowStatusOption] = React.useState(false)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setShowStatusOption(false)
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <button style={{ backgroundColor: "none" }} aria-describedby={id} onClick={handleClick}>
                {children}
            </button>
            <Popover
                // sx={{ position: "relative" }}
                id={id}
                open={open}
                anchorEl={anchorEl}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 485, left: 0 }}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            // style={{ borderRadius: "6px", backgroundColor: "#173b64" }}
            >
                <EditProfile profile={profile} setShowStatusOption={setShowStatusOption} showStatusOption={showStatusOption} />

            </Popover>
        </div>
    );
}

