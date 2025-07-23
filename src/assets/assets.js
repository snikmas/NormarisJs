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
  cart: MdOutlineShoppingBag
}