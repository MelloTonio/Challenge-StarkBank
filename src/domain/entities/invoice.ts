export type Invoice = {
    name: string,
    due: string;
    amount: number,
    taxId: string,
    descriptions: { key: string, value: string }[],
    fine: number,
    interest: number
};