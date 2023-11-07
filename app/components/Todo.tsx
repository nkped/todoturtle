import { HiPencilAlt } from 'react-icons/hi'
import DeleteBtn from './DeleteBtn'

export default function Todo() {

    return(
        <div>
            <div className='flex justify-between border border-slate-300 px-6 py-3'>
                <div>
                    <h2>Hardcoded todo</h2>        
                    <p>This todo will become dynamic</p>
                </div>
                <div className='flex gap-2'>
                    <HiPencilAlt size={24}/>
                    <DeleteBtn />
                </div>
            </div>
        </div>
    )
}