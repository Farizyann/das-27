export interface IProduct {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    ICategory;
    images:      string[];
    categoryId:  number
}

export interface ICategory {
    id:    number;
    name:  string;
    image: string;
}
