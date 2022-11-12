interface IInputLoginProps{
    id: string;
    label: string;
    value: string;
    type: string;
    onPressEnter?: () => void;
    onChange: (NewValue: string) => void;

}
export const InputLogin: React.FC<IInputLoginProps> = (props) => {
    return (
        <>
        <label htmlFor="email">{props.label}</label>
        <input
          type={props.type}
          name=""
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter"
            ? props.onPressEnter && props.onPressEnter()
            : undefined
          }
          id={props.id}
        />
        </>
    )
}