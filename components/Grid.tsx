import React from 'react'
import { BentoGrid,BentoGridItem } from './ui/BentoGrid'
import { gridItems} from '@/data/data'
function Grid() {
  return (
    <section id="" className='flex justify-center'>
        <BentoGrid>
            {gridItems.map((item,index)=>(
                <BentoGridItem id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
                className={item.className}
                img={item.img}
                imgClassName={item.imgClassName}
                spareImg={item.spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid