// here all imports from libraries / assets in this file like
// import samsung_logo from './file/doler/file.c

// import logo form 'libtary'

//and then go
// export chonst assets = {logo, name, all, logos}

//and then we can just put name and thats all

// also data from for something 
// like const manage something {id name title

// photos
import logo from "./logo.png"
import bg from './bg.jpg'
import kidHome from './kid-home.png'
import womanHome from './woman-home.png'
import manHome from './man-home.png'

import { MdOutlineFavoriteBorder, MdOutlineFavorite, MdOutlineShoppingBag } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

// photos
import product_1 from './clothes/product-1.jpg' 
import product_3 from './clothes/product-3.png' 
import product_4 from './clothes/product-4.png' 
import product_5 from './clothes/product-5.jpg' 
import product_6 from './clothes/product-6.jpg' 
import product_7 from './clothes/product-7.jpg' 

// hard to do: no pages rn
export const contacts = {
  phone: '(123) 456-7890',
  mail: 'normaris@example.com',
  address: '1234 Elmwood Drive Apartment 56B Springfield IL, 62704 '
}


export const assets = {
  bg,
  logo,
  womanHome,
  manHome,
  kidHome,
  arrowRight: IoIosArrowRoundForward,
  arrowLeft: IoIosArrowRoundBack,
  isFavoriteFull: MdOutlineFavorite,
  isFavoriteEmpty: MdOutlineFavoriteBorder,
  search: BsSearch,
  cart: MdOutlineShoppingBag,
  product_1, product_3, product_4, product_5, product_6, product_7
}