import { ITodayStrategy } from '@/types'
import { memo } from 'react'
import PortfolioStrategyBody from './PortfolioStrategyBody'

interface IPortfolioStrategyProps {
  todayStrategy: ITodayStrategy[]
}

const PortfolioStrategy = ({
  todayStrategy,
}: IPortfolioStrategyProps): JSX.Element => {
  return (
    <div className=' overflow-x-auto'>
      <table className='w-full rounded-2xl table-auto overflow-scroll'>
        <thead className='text-sm font-medium rounded h-16 my-auto'>
          <tr>
            <th
              align='left'
              className='min-w-[200px] md:w-[30%] pl-2 md:pl-10 bg-gray-100 text-gray-500 rounded-l-xl'>
              Strategy
            </th>
            <th
              align='left'
              className='min-w-[200px] md:w-[20%] pl-2 md:pl-10 bg-gray-100 text-gray-500'>
              Allocation
            </th>
            <th
              align='left'
              className='min-w-[200px] md:w-[20%] pl-2 md:pl-10 bg-gray-100 text-gray-500'>
              Symbol
            </th>
            <th
              align='left'
              className='min-w-[200px] md:w-[10%] pl-2 md:pl-10 bg-gray-100 text-gray-500'>
              PnL
            </th>
            <th
              align='center'
              className='min-w-[200px] md:w-[20%] bg-gray-100 text-gray-500 rounded-r-xl'></th>
          </tr>
        </thead>
        <tbody>
          {todayStrategy.map((data, index) => (
            <PortfolioStrategyBody key={index} {...data} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default memo(PortfolioStrategy)
