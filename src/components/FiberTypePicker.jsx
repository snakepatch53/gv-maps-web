import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toolsMap, typeTools } from "../lib/constants";
import { cls } from "../lib/utils";

export default function FiberTypePicker({ selected, onSelect }) {
    const typeMarkers = Object.values(toolsMap).filter((tool) => tool.type === typeTools.FIBER);
    if (!selected) selected = typeMarkers[0];
    return (
        <>
            {typeMarkers.map((tool) => (
                <button
                    type="button"
                    key={tool.name}
                    className={cls(
                        " flex flex-col justify-center items-center w-[52px] aspect-square bg-transparent transition-all duration-300 py-1 px-1.5 rounded-lg hover:bg-black/5 ",
                        {
                            " bg-black/10 hover:bg-black/10 ": tool.name === selected.name,
                        }
                    )}
                    onClick={() => onSelect(tool)}
                >
                    <FontAwesomeIcon
                        style={{ color: tool.color }}
                        className="text-lg"
                        icon={tool.icon}
                    />
                    <span className=" text-xs leading-3 ">{tool.name}</span>
                </button>
            ))}
        </>
    );
}
