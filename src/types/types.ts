export interface Item {
  name: string;
  description: string;
  weight: number;
  cost: number;
  worn: boolean;
  consumable: boolean;
  quantity: number;
}

export interface Category {
  name: string;
  items: Item[];
}

export interface Pack {
  _id: string;
  name: string;
  categories: Category[];
  tags: string[];
  trail: string;
}