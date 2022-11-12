import React from 'react'
interface IInputLoginProps{
    id: string;
    label: string;
    value: string;
    type: string;
    onPressEnter?: () => void;
    onChange: (NewValue: string) => void;

}
export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {
    return (
        <>
        <label htmlFor="email">{props.label}</label>
        <input
            ref={ref}
            id={props.id}
          type={props.type}
          name=""
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter"
            ? props.onPressEnter && props.onPressEnter()
            : undefined
        }
        />
        </>
    )
})