


export default function addTodo() {

    return(
        <form className="flex flex-col gap-3">
            <input className="border border-slate-500 px-8 py-2 rounded-md" 
                type="text"
                placeholder="Type title.." 
                />
            <input 
                className="border border-slate-500 px-8 py-2 rounded-md"
                type="text"
                placeholder="Type description.." 
                />
            <button 
                className="bg-green-500 py-3 font-bold text-white  hover:shadow-lg hover:text-emerald-200 rounded-md"
                type="submit"
                >Add</button>
        </form>
    )
}