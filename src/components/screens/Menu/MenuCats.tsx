import { useLang } from '@/hooks/useLang'
import cn from 'clsx'
import { Dispatch, FC, SetStateAction } from 'react'
import { IMenuCat } from './menu.interface'

interface IMenuCats {
  cats: IMenuCat[]
  catId: number
  setCatId: Dispatch<SetStateAction<number>>
}

const MenuCats: FC<IMenuCats> = (props) => {
  return (
    <div className='flex gap-6'>
      {props.cats.map((c) => (
        <Item
          key={c.id}
          item={c}
          isActive={c.id === props.catId}
          setCatId={() => props.setCatId(c.id)}
        />
      ))}
    </div>
  )
}

interface IItem {
  item: IMenuCat
  isActive: boolean
  setCatId: () => void
}

const Item: FC<IItem> = (props) => {
  const { isEnglish } = useLang()

  return (
    <button
      onClick={() => props.setCatId()}
      className={cn(
        'px-7 py-3 text-white duration-300 font-bold flex flex-col gap-1 justify-center items-center rounded-[43px] shadow-icon sm:py-3',
        props.isActive ? 'bg-blue-default' : 'bg-[#C0C0C0]'
      )}
    >
      <div className='text-xs sm:text-xl'>
        {isEnglish ? props.item.englishName : props.item.arabicName}
      </div>
      <div className='text-min sm:text-sm'>Items: {props.item.itemsCount}</div>
    </button>
  )
}

export default MenuCats
