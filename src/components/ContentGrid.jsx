/* eslint-disable react/prop-types */
export default function ContentGrid({ content }){
    return(
        <div className="p-6 font-ocraextended">
            <div className="grid grid-cols-3 gap-4">
                {content.map((contentelement) => (
                <div
                    key={contentelement.id}
                    className="p-4 border border-green-400 bg-black "
                >
                    <img
                        src={contentelement.image}
                        alt={contentelement.name}
                        className="w-full h-32 mb-2"
                    />
                    <h2 className="text-lg font-semibold text-green-400">{contentelement.name}</h2>
                    <p className="text-green-600">{contentelement.description}</p>
                </div>
                ))}
            </div>
        </div>
    )
}