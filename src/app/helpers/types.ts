
export interface formattedDataType {
    reference: string;
    accountNumber: string;
    description: string;
    startBalance: string;
    mutation: string;
    endBalance: string;
}

export interface invalidDuplicateType {
    reference: string;
    description: string;
}

export interface invalidDuplicateDataType {
    reference: string;
    items: invalidDuplicateType[];
}