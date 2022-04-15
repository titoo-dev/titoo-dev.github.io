
function SectionTitle({ title, size }) {
    return (
        <div className="flex flex-row items-center space-x-4">
            { 
                size !== 'small' 
                    ? <div className='w-24 h-1 bg-pink-500'></div> 
                    : <div className='w-14 h-1 bg-pink-500'></div> 
            }
            
            <p className="text-gray-400 text-md font-normal">{ title }</p>
        </div>
    )
}


export default SectionTitle