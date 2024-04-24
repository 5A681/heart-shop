import CateItem from "./CateItem"


export default function ShopCategory() {
  return (
     <div className="grid grid-cols-6">
        
        <CateItem name="Beauty & Personal Care" src="/src/assets/shopcategory/personalcare.png"></CateItem>
        <CateItem name="Men Clothes" src="/src/assets/shopcategory/men_cloth.png"></CateItem>
        <CateItem name="Women Clothes" src="/src/assets/shopcategory/women_cloth.png"></CateItem>
        <CateItem name="Watches & Glasses" src="/src/assets/shopcategory/watches.png"></CateItem>
        <CateItem name="Fashion Accessories" src="/src/assets/shopcategory/accessories.png"></CateItem>
        <CateItem name="Home & Living" src="/src/assets/shopcategory/living.png"></CateItem>
        <CateItem name="Bags" src="/src/assets/shopcategory/bags.png"></CateItem>
        <CateItem name="Women Shoes" src="/src/assets/shopcategory/women_shoes.png"></CateItem>
        <CateItem name="Men Shoes" src="/src/assets/shopcategory/men_shoes.png"></CateItem>
        <CateItem name="Computers & Laptops" src="/src/assets/shopcategory/laptop.png"></CateItem>
        <CateItem name="Mobile & Gadgets" src="/src/assets/shopcategory/mobile.png"></CateItem>
        <CateItem name="Gaming & Accessories" src="/src/assets/shopcategory/gaming.png"></CateItem>

      </div>
  )
}