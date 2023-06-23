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


export type BuildParamType = {
    id: number,
    img: string,
    text: string,
    value: string | string[]
}