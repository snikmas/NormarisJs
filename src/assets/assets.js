// here all imports from libraries / assets in this file like
// import samsung_logo from './file/doler/file.c

// import logo form 'libtary'

//and then go
// export chonst assets = {logo, name, all, logos}

//and then we can just put name and thats all

// also data from for something 
// like const manage something {id name title

import logo from "./logo.png"
import bgHome from './bg-home.png'
import { MdOutlineFavoriteBorder, MdOutlineFavorite, MdOutlineShoppingBag } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs';

// hard to do: no pages rn
export const contacts = {
  phone: '(123) 456-7890',
  mail: 'normaris@example.com',
  address: '1234 Elmwood Drive Apartment 56B Springfield IL, 62704 '
}


export const assets = {
  bgHome,
  logo,
  isFavoriteFull: MdOutlineFavorite,
  isFavoriteEmpty: MdOutlineFavoriteBorder,
  search: BsSearch,
  cart: MdOutlineShoppingBag
}