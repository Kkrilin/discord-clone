import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Trigger } from '../Utils/Trigger';

type BasicModalProps = {
    children: React.ReactElement
}


const withPopover = (WrappedComponent: React.ComponentType<any>) => {
    return function BasicPopover({ children, ...props }: BasicModalProps) {
        const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        const open = Boolean(anchorEl);
        const id = open ? 'simple-popover' : undefined;

        return (
            <div>
                <Trigger aria-describedby={id} handleClick={handleClick}>
                    {children}
                </Trigger>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                >
                    {/* <Typography sx={{ p: 2 }}>The content of the Popover.</Typography> */}
                    <WrappedComponent {...props} handleClose={handleClose} />
                </Popover>
            </div >
        );
    }
}

export default withPopover