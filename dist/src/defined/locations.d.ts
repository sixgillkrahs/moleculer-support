declare const LIST_PROVINCE: {
    id: number;
    name: string;
}[];
declare const LIST_DISTRICT: {
    id: number;
    name: string;
    province: number;
}[];
declare const LIST_WARD: {
    id: number;
    name: string;
    province: number;
    district: number;
}[];
export { LIST_DISTRICT, LIST_WARD, LIST_PROVINCE };
