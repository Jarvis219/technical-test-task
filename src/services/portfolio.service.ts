import { IProfit, IProfitByDay, ITodayStrategy } from '@/types'
import { request } from '.'

export const getProfitInApi = async (): Promise<IProfit> => {
  const { data } = await request.get<IProfit>('profit.json')
  return data
}

export const getProfitByDayInApi = async (): Promise<IProfitByDay> => {
  const { data } = await request.get<IProfitByDay>('profit_by_day.json')
  return data
}

export const getTodayStrategyInApi = async (): Promise<ITodayStrategy[]> => {
  const { data } = await request.get<ITodayStrategy[]>('today_strategy.json')
  return data
}
