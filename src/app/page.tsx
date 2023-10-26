import HomeContainer from '@/components/containers/HomeContainer'
import {
  getProfitByDayInApi,
  getProfitInApi,
  getTodayStrategyInApi,
} from '@/services'
import { IProfitData } from '@/types'
import { NextPage } from 'next'

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
        profit: (+data.today / +data.yesterday) * 100,
      },
      {
        title: 'This Month Profit',
        total: data.total,
        caption: 'compared to last month',
        profit: (+data.this_month / +data.last_month) * 100,
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
