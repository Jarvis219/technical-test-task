import TTImage from '@/components/base/TTImage'
import { imageUrl } from '@/constants'
import { ITodayStrategy } from '@/types'
import { calculatePercentProfit, formatNumber } from '@/utils'
import { memo, useMemo } from 'react'
import { FaDollarSign } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'

interface IPortfolioStrategyBodyProps extends ITodayStrategy {
  index: number
}

const PortfolioStrategyBody = ({
  title,
  allocation,
  symbol,
  pnl,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  previous_pnl,
  index,
}: IPortfolioStrategyBodyProps): JSX.Element => {
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

  const resultProfit = calculatePercentProfit(+pnl, +previous_pnl)

  return (
    <tr className='border-b border-gray-100 h-16'>
      <td className='pl-2 md:pl-10'>
        <p className='line-clamp-1'>{title}</p>
      </td>
      <td className='pl-2 md:pl-10 h-full'>
        <div className='flex gap-1 items-center font-medium'>
          <FaDollarSign />
          {formatNumber(+allocation)}
        </div>
      </td>
      <td className='pl-2 md:pl-10 h-full'>{symbols[symbol as never]}</td>
      <td className='pl-2 md:pl-10 h-full'>
        <p
          className={`flex gap-1 items-center font-semibold ${
            resultProfit ? 'text-green-500' : 'text-red-500'
          }`}>
          {resultProfit > 0 ? '+' : ''}
          {resultProfit.toFixed(2)}%
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
}

export default memo(PortfolioStrategyBody)
