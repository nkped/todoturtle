import { HiPencilAlt } from 'react-icons/hi'
import DeleteBtn from './DeleteBtn'
import Link from 'next/link'

export default function Todo() {

    return(
        <div>
            <div className='flex justify-between border border-slate-300 px-6 py-3'>
                <div>
                    <h2>Hardcoded todo</h2>        
                    <p>This todo will become dynamic</p>
                </div>
                <div className='flex gap-2'>
                    <Link className='text-green-400' href='/edit/123' ><HiPencilAlt size={24}/></Link>
                    <DeleteBtn />
                </div>
            </div>
        </div>
    )
}