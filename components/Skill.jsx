
export default function Skill(props) {
    
    return (
        <div className="text-gray-100 w-56 m-8 p-4 bg-gray-800 rounded-lg shadow-lg shadow-teal-600 overflow-hidden flex flex-col items-center">
            <div className="font-serif font-bold text-teal-400">{props.skill}</div>   
            <div className="font-serif text-teal-100 mt-4">
                <a href={props.link} className="hover:text-yellow-100 hover:underline">Click for notes</a>
            </div>
            <div className="font-serif text-teal-100 mt-2">
                <a href={props.reference} className="hover:text-yellow-100">Reference Link</a>
            </div> 
        </div>
    )
}