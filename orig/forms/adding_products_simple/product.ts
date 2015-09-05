export class Product {
  sku: string;
  name: string;
  image_url: string;
  published: boolean;
  department: Array<string>;
  price: number;

  constructor(
    sku:string,
    name:string,
    image_url:string,
    published:boolean,
    department: Array<string>,
    price: number) {
    this.sku = sku;
    this.name = name;
    this.image_url = image_url;
    this.published = published;
    this.department = department;
    this.price = price;
  }
}

