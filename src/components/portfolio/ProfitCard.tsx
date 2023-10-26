import { formatNumber } from '@/utils'
import { ReactNode, memo } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProfitCardProps {
  title: string
  total: number
  children: ReactNode
  className?: string
}

const ProfitCard = ({
  title,
  total,
  children,
  className = '',
}: IProfitCardProps): JSX.Element => {
  const classes = twMerge(
    'shadow w-full rounded-2xl p-5 bg-white hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-lg',
    className
  )

  return (
    <article className={classes}>
      <h3 className='text-xs font-semibold line-clamp-1'>{title}</h3>
      <div className='flex gap-1 items-center'>
        $
        <p className='text-xl font-bold my-1 line-clamp-1'>
          {formatNumber(total)}
        </p>
      </div>
      {children}
    </article>
  )
}

export default memo(ProfitCard)
