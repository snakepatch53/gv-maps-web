import { useEffect, useState } from "react";
import { fiberColors } from "../lib/constants";
import { cls } from "../lib/utils";

export default function MarkerNapThreadColorPicker({ value, onChange }) {
    const [selected, setSelected] = useState(value);
    const handleChange = (color, i) => {
        setSelected(color);
        if (!onChange) return;
        onChange(color, i);
    };
    useEffect(() => {
        setSelected(value);
    }, [value]);
    return (
        <div className=" grid grid-cols-6 gap-1 ">
            {Object.values(fiberColors).map((color, i) => {
                const fiberColor = Object.keys(fiberColors)[i];
                const isSelected = selected === color || selected == fiberColor;
                return (
                    <div
                        key={i}
                        className={cls(
                            " flex w-8 aspect-square rounded-full border  border-transparent transition hover:scale-110 ",
                            {
                                " border-black ": isSelected,
                            }
                        )}
                    >
                        <button
                            onClick={() => handleChange(color, fiberColor)}
                            type="button"
                            className={cls(
                                " w-full h-full rounded-full shadow-lg border-2 border-transparent transition ",
                                {
                                    " border-green-400 ": isSelected,
                                }
                            )}
                            style={{ backgroundColor: color }}
                        />
                    </div>
                );
            })}
        </div>
    );
}
