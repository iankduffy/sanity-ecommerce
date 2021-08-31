// Product Info
export interface ProductProps {
  title: string, 
  slug: string, 
  defaultProductVariant: VariantProps, // Need to add variants
  variants: Array<VariantProps>,
  tags: Array<string>, 
  vendor: any, 
  blurb: any,
  categories: Array<any>, 
  details?: any // Bug: Type 'BlockContentProps' is not assignable to type 'string'.
  features?: any // Bug: Type 'BlockContentProps' is not assignable to type 'string'.
  delivery?: any // Bug: Type 'BlockContentProps' is not assignable to type 'string'.
}

export interface VariantProps {
  title: string, 
  grams: number, 
  price: number, 
  sku: string, 
  taxable: boolean, 
  images: Array<any> // Add Sanity image
  barcode: any
}

export interface ProductImageProps {

}

export interface ProductImageArrayProps {
  
}
// Product end s