import { useContext, useEffect, useRef, useState } from "react";
import { toolsMap, typeTools } from "../lib/constants";
import { cls } from "../lib/utils";
import { MarkersContext } from "../contexts/markers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import FiberColorPicker from "../components/FiberColorPicker";
import FiberPortsPicker from "../components/FiberPortsPicker";
import MarkerFormTypePicker from "../components/MarkerFormTypePicker";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";

export default function MapMarkerForm() {
    const windowRef = useRef(null);
    const { isMarkerFormOpen, closeMarkerForm } = useContext(MarkersContext);

    //

    // Eventos para cerrar el formulario
    // window.onkeydown = (e) => e.key === "Escape" && closeMarkerForm();
    useEffect(() => {
        const handleKeyDown = (e) => e.key === "Escape" && closeMarkerForm();
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (windowRef.current) {
        windowRef.current.onclick = (e) => {
            if (e.target === windowRef.current) closeMarkerForm();
        };
    }

    return (
        <div
            className={cls(
                " absolute inset-0 flex justify-center items-center bg-black/10 backdrop-blur-sm ",
                {
                    " hidden ": !isMarkerFormOpen,
                }
            )}
            ref={windowRef}
        >
            <div className=" flex flex-col w-full max-w-[500px] p-5 bg-white rounded-lg shadow-lg ">
                <div className=" flex justify-end ">
                    <button
                        onClick={closeMarkerForm}
                        type="button"
                        className=" flex justify-center items-center w-10 aspect-square rounded-full bg-black/10 transition duration-300 hover:rotate-90 "
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                <h4 className=" uppercase text-center text-xl font-bold ">Editar</h4>
                <Form />
            </div>
        </div>
    );
}

function Form() {
    const { markerSelected, updateMarker } = useContext(MarkersContext);

    const typeMarkers = Object.values(toolsMap).filter((tool) => tool.type === typeTools.MARKER);
    const [markerSelectedType, setMarkerSelectedType] = useState(null);

    useEffect(() => {
        const markerSelected_type = typeMarkers.find((tool) => tool.name === markerSelected?.type);
        setMarkerSelectedType(markerSelected_type);
    }, [markerSelected]); // eslint-disable-line react-hooks/exhaustive-deps
    const handleChangeMarkerType = (tool) => setMarkerSelectedType(tool);

    if (!markerSelected) return null;
    return (
        <Formik
            initialValues={{
                name: markerSelected?.name || "",
                latitude: markerSelected?.latitude || "",
                longitude: markerSelected?.longitude || "",
                description: markerSelected?.description || "",
                type: markerSelected?.type || "",

                reserve_meters: markerSelected?.reserve_meters || 1,
                nap_buffer: markerSelected?.nap_buffer || 1,
                nap_thread: markerSelected?.nap_thread || 1,
                nap_ports: markerSelected?.nap_ports || 1,
            }}
            validationSchema={Yup.object({
                name: Yup.string().required("Ingrese el nombre del marcador"),
                latitude: Yup.number().required("Ingrese la latitud"),
                longitude: Yup.number().required("Ingrese la longitud"),
                reserve_meters: Yup.number().required("Ingrese los metros de reserva"),
                nap_buffer: Yup.number().required("Ingrese el buffer"),
                nap_thread: Yup.number().required("Ingrese el puerto"),
                nap_ports: Yup.number().required("Ingrese el numero de puertos"),
            })}
            onSubmit={async (values) => {
                await updateMarker(markerSelected.id, values);
            }}
        >
            {({ handleSubmit, values, handleChange, isSubmitting }) => {
                // console.log(values);
                return (
                    <form onSubmit={handleSubmit} className=" flex flex-col ">
                        <InputText name="name" label="Nombre:" placeholder="Nombre del marcador" />
                        <input type="text" />

                        <div className=" flex gap-3 ">
                            <InputText name="latitude" label="Latitud:" placeholder="Latitud" />
                            <InputText name="longitude" label="Longitud:" placeholder="Longitud" />
                        </div>

                        <InputText
                            name="description"
                            label="Descripcion:"
                            placeholder="Descripcion del marcador"
                            as="textarea"
                            classInput=" resizex-none min-h-16 "
                        />

                        <div>
                            <label className=" flex items-center gap-1 ">
                                <Label text="Tipo de Marcador:" />
                                <span className=" font-normal uppercase text-sm pb-1 ">
                                    {markerSelectedType?.name}
                                </span>
                            </label>
                            <div className=" flex justify-evenly ">
                                <MarkerFormTypePicker
                                    selected={markerSelectedType}
                                    onSelect={(tool) => {
                                        handleChangeMarkerType(tool);
                                        handleChange({
                                            target: { name: "type", value: tool.name },
                                        });
                                    }}
                                />
                            </div>
                        </div>

                        {markerSelectedType?.name === toolsMap.RESERVA.name && (
                            <InputText
                                name="reserve_meters"
                                type="number"
                                label="METROS:"
                                placeholder="Metros de reserva"
                            />
                        )}
                        {(markerSelectedType?.name === toolsMap.NAP1.name ||
                            markerSelectedType?.name === toolsMap.NAP2.name) && (
                            <>
                                <div className=" flex gap-4 ">
                                    <div className=" flex flex-col gap-2 ">
                                        <Label text="Buffer:" />
                                        <FiberColorPicker
                                            onChange={(_, color) =>
                                                handleChange({
                                                    target: { name: "nap_buffer", value: color },
                                                })
                                            }
                                            value={values.nap_buffer}
                                        />
                                        <ErrorMessage name="nap_buffer" />
                                    </div>
                                    <div className=" flex flex-col gap-2 ">
                                        <Label text="Hilo:" />
                                        <FiberColorPicker
                                            onChange={(_, color) =>
                                                handleChange({
                                                    target: { name: "nap_thread", value: color },
                                                })
                                            }
                                            value={values.nap_thread}
                                        />
                                        <ErrorMessage name="nap_thread" />
                                    </div>
                                </div>
                                <div>
                                    <Label text="Numero de Puertos:" />
                                    <FiberPortsPicker value={values.nap_ports} />
                                </div>
                            </>
                        )}
                        <button
                            type="submit"
                            className={cls(
                                " bg-blue-500 text-white rounded p-3 mt-2 uppercase font-bold hover:bg-blue-600 ",
                                {
                                    " opacity-50 cursor-not-allowed ": isSubmitting,
                                }
                            )}
                        >
                            Guardar
                        </button>
                    </form>
                );
            }}
        </Formik>
    );
}

function InputText({ label, classInput = "", ...props }) {
    return (
        <div className=" flex-1 flex flex-col ">
            <Label text={label} />
            <Field
                name={props.name}
                className={cls(" border rounded p-2 ", classInput)}
                {...props}
            />
            <div className=" w-full h-6 text-red-500 text-sm ">
                <ErrorMessage name={props.name} />
            </div>
        </div>
    );
}

function Label({ text, className }) {
    return (
        <label className={cls(" font-bold text-sm uppercase pl-1 mb-1 ", className)}>{text}</label>
    );
}
