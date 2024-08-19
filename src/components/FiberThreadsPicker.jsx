import { useEffect, useState } from "react";
import { cls } from "../lib/utils";
import { toolsMap } from "../lib/constants";

export default function FiberThreadsPicker({ fiberType, value, onChange }) {
    const [options, setOptions] = useState(null);

    const handleChange = (num) => {
        if (!onChange) return;
        onChange(num);
    };

    useEffect(() => {
        if (!fiberType) return;
        if (fiberType === toolsMap.DROP.name) setOptions([1, 2, 4, 6, 8, 12]);
        if (fiberType === toolsMap.MINI_ADSS.name) setOptions([6, 8, 12, 24, 48]);
        if (fiberType === toolsMap.ADSS.name) setOptions([12, 24, 48, 72, 96]);
    }, [fiberType]);

    useEffect(() => {
        if (!options) return;
        if (!options.includes(value)) handleChange(options[0]);
    }, [options]); // eslint-disable-line

    if (!fiberType) return null;
    return (
        <div className=" flex justify-center gap-1 ">
            {options?.map((num) => (
                <Option key={num} label={num} selected={value} onClick={() => handleChange(num)} />
            ))}
        </div>
    );
}

function Option({ label, selected, ...props }) {
    const isSelected = selected == label;
    return (
        <button
            type="button"
            className={cls(
                " w-10 aspect-square bg-transparent transition-all duration-300 p-1.5 rounded-lg hover:scale-110 hover:bg-black/5 ",
                {
                    " bg-black/10 hover:bg-black/10 ": isSelected,
                }
            )}
            {...props}
        >
            <span className=" font-normal ">{label}</span>
        </button>
    );
}
