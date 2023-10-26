import TTImage from '@/components/base/TTImage'
import { imageUrl } from '@/constants'
import { ITodayStrategy } from '@/types'
import { formatNumber } from '@/utils'
import { memo, useMemo } from 'react'
import { FaDollarSign } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'

interface IPortfolioStrategyProps {
  todayStrategy: ITodayStrategy[]
}

const PortfolioStrategy = ({
  todayStrategy,
}: IPortfolioStrategyProps): JSX.Element => {
  const calculatePercentPnl = (pnl: string, previousPnl: string): number =>
    (+pnl / +previousPnl) * 100

  const symbols = useMemo(
    () => ({
      BINANCE_SPOT_BTC_USDT: (
        <div className='flex gap-1'>
          <p className='flex items-center'>
            <TTImage src={imageUrl.band} width={20} height={20} /> BAND
          </p>
          /
          <p className='flex items-center'>
            <TTImage src={imageUrl.usdt} width={20} height={20} /> USDT
          </p>
        </div>
      ),
    }),
    []
  )

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
          {todayStrategy.map(
            // eslint-disable-next-line @typescript-eslint/naming-convention
            ({ title, allocation, symbol, pnl, previous_pnl }, index) => (
              <tr key={index} className='border-b border-gray-100 h-16'>
                <td className='pl-2 md:pl-10'>
                  <p className='line-clamp-1'>{title}</p>
                </td>
                <td className='pl-2 md:pl-10 h-full'>
                  <div className='flex gap-1 items-center font-medium'>
                    <FaDollarSign />
                    {formatNumber(+allocation)}
                  </div>
                </td>
                <td className='pl-2 md:pl-10 h-full'>
                  {symbols[symbol as never]}
                </td>
                <td className='pl-2 md:pl-10 h-full'>
                  <p
                    className={`flex gap-1 items-center font-bold ${
                      calculatePercentPnl(pnl, previous_pnl)
                        ? 'text-green-500'
                        : 'text-red-500'
                    }`}>
                    {calculatePercentPnl(pnl, previous_pnl) > 0 ? '+' : '-'}
                    {calculatePercentPnl(pnl, previous_pnl).toFixed(2)}%
                  </p>
                </td>
                <td align='center' className='h-full'>
                  <button className='relative rounded-full px-4 py-3 overflow-hidden group bg-gray-100 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 text-indigo-600 hover:ring-2 hover:ring-offset-2 hover:ring-gray-200 transition-all ease-out duration-300'>
                    <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease' />
                    <span className='relative flex justify-center items-center gap-1 font-semibold text-xs'>
                      {index === 0 && 'View Bot'}
                      <FiArrowUpRight />
                    </span>
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default memo(PortfolioStrategy)
