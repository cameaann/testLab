export interface IColumn {
    title: string;
    property: string;
    sortable?: boolean;
}

export interface ISubject {
    title: string;
    items: any[];
    columns: IColumn[];
    getDisplayName(item): string;
}