

export default function editPage() {

    return (
        <form className="flex flex-col gap-3">
            <input className="border border-slate-500 px-8 py-2 rounded-md" 
                type="text"
                placeholder="Edit title.." 
                />
            <input 
                className="border border-slate-500 px-8 py-2 rounded-md"
                type="text"
                placeholder="Edit description.." 
                />
            <button 
                className="bg-green-500 py-3 font-bold text-white  hover:shadow-lg hover:text-emerald-200 rounded-md"
                type="submit"
                >Update Turtle</button>
        </form>
    )
}