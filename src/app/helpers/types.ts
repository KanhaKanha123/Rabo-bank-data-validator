
export interface formattedDataType {
    reference: string;
    accountNumber: string;
    description: string;
    startBalance: string;
    mutation: string;
    endBalance: string;
}

export interface invalidGenericType {
    reference: string;
    description: string;
}

export interface invalidDuplicateDataType {
    reference: string;
    items: invalidGenericType[];
}