export interface IProfit {
  total: string
  today: string
  yesterday: string
  this_month: string
  last_month: string
}

export interface IProfitByDay {
  [key: string]: string
}

export interface ITodayStrategy {
  title: string
  allocation: string
  symbol: string
  pnl: string
  previous_pnl: string
}

export interface IProfitData {
  title: string
  total: string
  caption: string
  profit?: number
}
