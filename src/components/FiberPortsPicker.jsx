import { useEffect, useState } from "react";
import { cls } from "../lib/utils";

export default function FiberPortsPicker({ value, onChange }) {
    const [selected, setSelected] = useState(value);

    const handleChange = (port) => () => {
        setSelected(port);
        if (!onChange) return;
        onChange(port);
    };

    useEffect(() => {
        setSelected(value);
    }, [value]);

    return (
        <div className=" flex gap-2 ">
            <Option label={2} selected={selected} onClick={handleChange(2)} />
            <Option label={4} selected={selected} onClick={handleChange(4)} />
            <Option label={8} selected={selected} onClick={handleChange(8)} />
            <Option label={16} selected={selected} onClick={handleChange(16)} />
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
                    " bg-black/10 ": isSelected,
                }
            )}
            {...props}
        >
            <span className=" font-normal ">{label}</span>
        </button>
    );
}
