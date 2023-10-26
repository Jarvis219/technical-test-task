import PortfolioChar from '@/components/portfolio/PortfolioChart'
import PortfolioStrategy from '@/components/portfolio/PortfolioStrategy'
import ProfitCard from '@/components/portfolio/ProfitCard'
import { IProfitByDay, IProfitData, ITodayStrategy } from '@/types'
import { formatNumber } from '@/utils'
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'

interface IHomeContainerProps {
  profit: IProfitData[]
  profitByDay: IProfitByDay
  todayStrategy: ITodayStrategy[]
}

const HomeContainer = ({
  profit,
  profitByDay,
  todayStrategy,
}: IHomeContainerProps): JSX.Element => (
  <main className='h-screen'>
    <div className='bg-indigo-950 relative h-28'>
      <div className='absolute top-[15%] w-full'>
        <div className='container mx-auto w-full px-2'>
          <h2 className='text-2xl text-white font-bold mb-2'>
            Overall Portfolio
          </h2>
          <section className='grid lg:grid-cols-3 gap-3 '>
            {profit.map((data, index) => (
              <ProfitCard key={index} title={data.title} total={+data.total}>
                <div className='flex items-center gap-1 line-clamp-1'>
                  {data.profit && (
                    <p
                      className={`flex gap-1 items-center text-sm ${
                        data.profit > 0 ? 'text-green-500' : 'text-red-500'
                      }`}>
                      {data.profit > 0 ? (
                        <BiSolidUpArrow />
                      ) : (
                        <BiSolidDownArrow />
                      )}
                      {data.profit > 0 && '+'}
                      {formatNumber(data.profit)}%
                    </p>
                  )}
                  <p className='text-xs text-gray-500'>{data.caption}</p>
                </div>
              </ProfitCard>
            ))}
          </section>
          <section className='mt-8'>
            <h2 className='text-xl font-bold mb-2'>Profit By Day</h2>
            <PortfolioChar profitByDay={profitByDay} />
          </section>
          <section className='mt-10 pb-10'>
            <h2 className='text-xl font-bold mb-3'>Today&apos;s Strategies</h2>
            <PortfolioStrategy todayStrategy={todayStrategy} />
          </section>
        </div>
      </div>
    </div>
  </main>
)

export default HomeContainer
