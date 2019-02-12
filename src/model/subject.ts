export interface IColumn {
    title: string;
    property: string;
}

export interface ISubject {
    title: string;
    items: any[];
    columns: IColumn[];
}