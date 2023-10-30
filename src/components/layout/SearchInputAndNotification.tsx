import { convertFullDate } from '@/utils'
import { memo } from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoMdNotificationsOutline } from 'react-icons/io'

const SearchInputAndNotification = (): JSX.Element => (
  <div className='hidden md:flex items-center gap-2'>
    <div className='relative bg-gray-400 rounded-full w-28 h-8 overflow-hidden'>
      <input
        type='text'
        placeholder='Search'
        className='w-full h-full bg-transparent pl-9 pr-3 text-xs font-medium  placeholder-gray-500 focus:outline-none text-white placeholder:text-white placeholder:text-xs'
      />
      <div className='absolute top-[2px] left-[3px] p-1.5 bg-gray-500 rounded-full text-white'>
        <FiSearch />
      </div>
    </div>
    <div className='relative bg-gray-400 rounded-full w-fit h-8 overflow-hidden flex items-center text-white'>
      <p className='text-xs pl-9'>{convertFullDate(new Date())}</p>
      <p className='ml-1 mx-[3px] px-2.5 py-0.5 bg-gray-500 rounded-full text-[10px]'>
        5
      </p>
      <div className='absolute top-[2px] left-[3px] p-1.5 bg-gray-500 rounded-full'>
        <IoMdNotificationsOutline />
      </div>
    </div>
  </div>
)

export default memo(SearchInputAndNotification)
