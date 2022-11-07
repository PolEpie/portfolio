import {  FC  } from 'react'
import Image from 'next/image'

type Props = {
    title: string,
    info: string,
    icon: string
};

const JumbotronInfo: FC<Props>  = ({title, info, icon}) => {
    return (
    <div className="flex flex-col items-center md:items-start space-y-5 w-full">
        <div className="space-x-3 flex">
            <Image
                src={"/images/" + icon}
                width={20}
                height={18}
            />
            <span className="uppercase text-lightgray text-sm">{title}</span>
        </div>
        <span className="font-montserrat text-2xl">{info}</span>
    </div>
  )
}

export default JumbotronInfo