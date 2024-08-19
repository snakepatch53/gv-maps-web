import { toolsMap, typeTools } from "../lib/constants";
import { cls } from "../lib/utils";

export default function MarkerTypePicker({ selected, onSelect }) {
    const typeMarkers = Object.values(toolsMap).filter((tool) => tool.type === typeTools.MARKER);
    if (!selected) selected = typeMarkers[0];
    return (
        <>
            {typeMarkers.map((tool) => (
                <button
                    type="button"
                    key={tool.name}
                    className={cls(
                        " w-10 aspect-square bg-transparent transition-all duration-300 p-1.5 rounded-lg ",
                        {
                            " bg-black/10": tool.name === selected.name,
                        }
                    )}
                    onClick={() => onSelect(tool)}
                >
                    <img className="w-full h-full object-contain" src={tool.icon} alt={tool.name} />
                </button>
            ))}
        </>
    );
}
