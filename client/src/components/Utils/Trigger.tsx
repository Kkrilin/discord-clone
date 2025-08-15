import React from "react";

type TriggerProps = {
    handleClick?: (e: React.MouseEvent) => void;
    children: React.ReactElement; // must be a valid React element
};

export function Trigger({ handleClick, children }: TriggerProps) {
    // const handleClick = (e: React.MouseEvent) => {
    //     onClick?.(e); // call the trigger's own handler if provided
    // };

    // clone the child and merge our onClick with its existing one
    return React.cloneElement(children, {
        onClick: (e: React.MouseEvent) => {
            // children.props.onClick?.(e); // child's existing click
            handleClick(e);              // our click
        },
    });
}
