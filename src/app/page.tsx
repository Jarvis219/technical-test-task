import HomeContainer from '@/components/containers/HomeContainer'
import {
  getProfitByDayInApi,
  getProfitInApi,
  getTodayStrategyInApi,
} from '@/services'
import { IProfitData } from '@/types'
import { calculatePercentProfit } from '@/utils'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio',
}

const HomePage: NextPage = async (): Promise<JSX.Element> => {
  const handleGetProfit = async (): Promise<IProfitData[]> => {
    const data = await getProfitInApi()

    const profitData: IProfitData[] = [
      {
        title: 'Total Profit',
        total: data.total,
        caption: 'captions goes here',
      },
      {
        title: 'Today Profit',
        total: data.today,
        caption: 'compared to yesterday',
        profit: calculatePercentProfit(+data.today, +data.yesterday),
      },
      {
        title: 'This Month Profit',
        total: data.this_month,
        caption: 'compared to last month',
        profit: calculatePercentProfit(+data.this_month, +data.last_month),
      },
    ]

    return profitData
  }

  const [profitByDay, todayStrategy, profits] = await Promise.all([
    getProfitByDayInApi(),
    getTodayStrategyInApi(),
    handleGetProfit(),
  ])

  return (
    <HomeContainer
      profit={profits}
      profitByDay={profitByDay}
      todayStrategy={todayStrategy}
    />
  )
}

export default HomePage
