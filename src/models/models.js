// improt

// you have a products and it has: name; small name? subname? span? yk-disney, girls pink moana printend dress), scores (5), reviews (121), price, oldprice? optional. descirption (its a logn///), colors (an array), sizes (array), favorite/not favorite ? or this is for order, id
//  also can add tags: new/not now/ available/ not/sales


export function Product ({
  id, 
  name, 
  shortName, 
  brand, 
  score = 0, 
  reviews = 0, 
  price, 
  oldPrice, 
  description, 
  colors = [], 
  sizes = [], 
  tags = [], 
  available = true, 
  createdAt = new Date(), 
  category, images = []
}) { return {
  id,
  name,
  shortName,
  brand,
  score,
  reviews,
  price,
  oldPrice,
  description,
  colors,
  sizes,
  tags,
  available,
  createdAt,
  category,
  images};
}