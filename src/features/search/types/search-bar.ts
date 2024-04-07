export type PreventDefault = React.FormEvent;
export type TargetValue = { target: { value: string } };
export type HandleChange = (event: TargetValue) => void;
export type HandleSubmit = (event: PreventDefault) => void;