'use client'

import MenuCats from '@/components/screens/Menu/MenuCats'
import { IMenuCat } from '@/components/screens/Menu/menu.interface'
import { useState } from 'react'

const MenuPage = () => {
  const [catId, setCatId] = useState(testCats[0].id)

  return (
    <div className='w-[90%] mx-auto mt-[37px]'>
      <MenuCats catId={catId} setCatId={setCatId} cats={testCats} />
    </div>
  )
}

const testCats: IMenuCat[] = [
  {
    id: 1,
    englishName: 'Desserts & Drinks',
    arabicName: 'المشروبات و الحلويات',
    photo: null,
    createDate: 'Sep 27, 2023, 19:30',
    itemsCount: 2
  },
  {
    id: 2,
    englishName: 'Burgers',
    arabicName: 'المشروبات و الحلويات',
    photo: null,
    createDate: 'Sep 27, 2023, 19:30',
    itemsCount: 18
  },
  {
    id: 3,
    englishName: 'Rice Meals',
    arabicName: 'المشروبات و الحلويات',
    photo: null,
    createDate: 'Sep 27, 2023, 19:30',
    itemsCount: 16
  }
]

export default MenuPage
