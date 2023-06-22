export type CardType = {
    id: string,
    title: string,
    geo: [number, number],
    img: string,
    text: string,
    price: string
}

export type PropertyValue = string | number | PropertyValue[] | PropertyValueObject | Image[];


interface PropertyValueObject {
    sectionId: string;
    catalogId: string;
    catalogTitle: string;
    catalogIcon: string;
    recordId: string;
    recordTitle: string;
    isRemoved: boolean;
  }

export interface Property {
    id: string;
    values: PropertyValue
}

export type PropertyType = {
    id: string,
    values: PropertyValue | any
}

export type PropertyTypeWithGeo = {
    id: string,
    values: PropertyValue | any,
    geo: [number, number];
}

export interface Image {
    id: number;
    title: string;
    size: number;
    url: string;
    mimeType: string;
    metadata: any; // You can define a specific type for metadata if needed
  }

export type ImageType = {
    id: number;
    title: string;
    size: number;
    url: string;
    mimeType: string;
    metadata: any; // You can define a specific type for metadata if needed
}

export type KeyImageType = {
    name: string,
    keyTitle: string,
    value: ImageType[] | []
}

export interface PropertyData {
    Properties: Property[];
}  


// interface PropertyValues {
//     2?: {
//         key: string;
//         name: string;
//         keyTitle: string;
//         value: string;
//     };
//     10?: {
//         key: string;
//         name: string;
//         keyTitle: string;
//         value: string;
//     };
//     15?: {
//         key: string;
//         name: string;
//         keyTitle: string;
//         value: string[];
//     };
//     16?: {
//         key: string;
//         name: string;
//         keyTitle: string;
//         value: any[];
//     };
//     19?: {
//         key: string;
//         name: string;
//         keyTitle: string;
//         value: string;
//     };
//     23?: {
//         key: string;
//         name: string;
//         keyTitle: string;
//         value: number;
//     };
//     // ... other properties
//     48?: {
//         key: string;
//         name: string;
//         keyTitle: string;
//         value: PropertyFeatures[];
//     };
//     55?: {
//         key: string;
//         name: string;
//         keyTitle: string;
//         value: CatalogRecord[];
//     };
//     56?: {
//         key: string;
//         name: string;
//         keyTitle: string;
//         value: string;
//     };
//     // ... and so on for other property values
// }


// interface ApiResponse {
//     Properties: Property[];
// }
