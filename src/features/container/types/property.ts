export type PropertyArray = Array<[string,number,number,string,number,number]>;
export interface PropertyProps {
    properties: PropertyArray;
    changeProperty: (event: React.ChangeEvent<HTMLInputElement>, newValue: number[]) => void;
    handleFilter: () => void;
}