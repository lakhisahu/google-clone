import Link from 'next/link'
import React from 'react'

export const ImageSearchResult = ({results}) => {
  return (
    <div className='pb-24 mt-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-3 space-x-4'>
            {results.items.map((result) => (
                <div className='group'>
                    <Link href={result.image.contextLink}>
                        <img src={result.link} alt={result.title} className='h-60 group-hover:shadow-xl w-full object-contain transition-shadow duration-300'/>
                    </Link>
                    <Link href={result.image.contextLink}>
                        <h2 className='group-hover:underline truncate text-xl'>
                            {result.title}
                        </h2>
                    </Link>
                    <Link href={result.image.contextLink}>
                        <p className='group-hover:underline truncale text-gray600'>
                            {result.displayLink}
                        </p>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

