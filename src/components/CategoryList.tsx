import Image from "next/image"
import Link from "next/link"

const Categorylist = () => {
  return (
    <div className='px-4 overflow-x'>
        <div className="flex gap-4 md:gap-8">
            <Link href="/list?cat=test">
                <div className="relative bg-slate-100 w-full h-96">
                <Image src="https://images.pexels.com/photos/23193135/pexels-photo-23193135.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="image" fill sizes="20vh" className=" object-cover "/>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Categorylist;