import { useContext, useEffect, useRef, useState } from "react";
import { toolsMap, typeTools } from "../lib/constants";
import { cls } from "../lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import { FibersContext } from "../contexts/fibers";
import FiberTypePicker from "../components/FiberTypePicker";
import FiberThreadsPicker from "../components/FiberThreadsPicker";

export default function MapFiberForm() {
    const windowRef = useRef(null);
    const { isFiberFormOpen, closeFiberForm } = useContext(FibersContext);

    useEffect(() => {
        const handleKeyDown = (e) => e.key === "Escape" && closeFiberForm();
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (windowRef.current) {
        windowRef.current.onclick = (e) => {
            if (e.target === windowRef.current) closeFiberForm();
        };
    }

    return (
        <div
            className={cls(
                " absolute inset-0 flex justify-center items-center bg-black/10 backdrop-blur-sm ",
                {
                    " hidden ": !isFiberFormOpen,
                }
            )}
            ref={windowRef}
        >
            <div className=" flex flex-col w-full max-w-[500px] p-5 bg-white rounded-lg shadow-lg ">
                <div className=" flex justify-end ">
                    <button
                        onClick={closeFiberForm}
                        type="button"
                        className=" flex justify-center items-center w-10 aspect-square rounded-full bg-black/10 transition duration-300 hover:rotate-90 "
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                <h4 className=" uppercase text-center text-xl font-bold ">Editar Fibra</h4>
                <Form />
            </div>
        </div>
    );
}

function Form() {
    const { fiberSelected, updateFiber, deleteFiber, isLoading } = useContext(FibersContext);

    const typeFibers = Object.values(toolsMap).filter((tool) => tool.type === typeTools.FIBER);
    const [fiberSelectedType, setFiberSelectedType] = useState(null);

    useEffect(() => {
        const fiberSelected_type = typeFibers.find((tool) => tool.name === fiberSelected?.type);
        setFiberSelectedType(fiberSelected_type);
    }, [fiberSelected]); // eslint-disable-line react-hooks/exhaustive-deps
    const handleChangeMarkerType = (tool) => setFiberSelectedType(tool);
    if (!fiberSelected) return null;
    return (
        <Formik
            initialValues={{
                name: fiberSelected?.name || "",
                type: fiberSelected?.type || "",
                threads: fiberSelected?.threads || "",
                serie: fiberSelected?.serie || "",
                description: fiberSelected?.description || "",
            }}
            validationSchema={Yup.object({
                name: Yup.string().required("Ingrese el nombre del marcador"),
                type: Yup.string().required("Seleccione el tipo de fibra"),
                threads: Yup.number().required("Seleccione el numero de hilos"),
            })}
            onSubmit={async (values) => {
                await updateFiber(fiberSelected.id, values);
            }}
        >
            {({ handleSubmit, values, handleChange, isSubmitting }) => {
                // console.log(values);
                return (
                    <form onSubmit={handleSubmit} className=" flex flex-col ">
                        <InputText name="name" label="Nombre:" placeholder="Nombre del marcador" />

                        <InputText name="serie" label="Serie:" placeholder="Serie del Cable" />

                        <InputText
                            name="description"
                            label="Descripcion:"
                            placeholder="Descripcion del marcador"
                            as="textarea"
                            classInput=" resizex-none min-h-16 "
                        />

                        <div className=" flex gap-3 w-full h-full ">
                            <div className=" min-w-44 flex flex-col justify-between ">
                                <label className=" flex justify-center items-center gap-1  ">
                                    <Label text="Tipo de Fibra:" className=" pl-1 " />
                                    <span className=" font-normal uppercase text-sm pb-1 mr-auto  ">
                                        {fiberSelectedType?.name}
                                    </span>
                                </label>
                                <div className=" flex justify-center gap-1 ">
                                    <FiberTypePicker
                                        selected={fiberSelectedType}
                                        onSelect={(tool) => {
                                            handleChangeMarkerType(tool);
                                            handleChange({
                                                target: { name: "type", value: tool.name },
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className=" flex-1 flex flex-col justify-between">
                                <Label
                                    className=" flex justify-center items-center "
                                    text="Numero de Hilos:"
                                />
                                <FiberThreadsPicker
                                    fiberType={fiberSelectedType?.name}
                                    value={values.threads}
                                    onChange={(threads) =>
                                        handleChange({
                                            target: { name: "threads", value: threads },
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div className=" flex mt-4 ">
                            <button
                                type="submit"
                                className={cls(
                                    " flex-1 bg-blue-500 text-white rounded p-3 mt-2 uppercase font-bold hover:bg-blue-600 ",
                                    {
                                        " opacity-50 cursor-not-allowed ":
                                            isSubmitting || isLoading,
                                    }
                                )}
                                disabled={isSubmitting || isLoading}
                            >
                                {isSubmitting ? (
                                    <FontAwesomeIcon icon={faSpinner} spin />
                                ) : (
                                    "Guardar"
                                )}
                            </button>
                            <button
                                type="button"
                                className={cls(
                                    " flex-1 bg-red-500 text-white rounded p-3 mt-2 ml-2 uppercase font-bold hover:bg-red-600 ",
                                    {
                                        " opacity-50 cursor-not-allowed ":
                                            isLoading || isSubmitting,
                                    }
                                )}
                                disabled={isLoading || isSubmitting}
                                onClick={() => deleteFiber(fiberSelected.id)}
                            >
                                {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Eliminar"}
                            </button>
                        </div>
                    </form>
                );
            }}
        </Formik>
    );
}

function InputText({ label, classInput = "", classWrap, ...props }) {
    return (
        <div className={cls(" flex-1 flex flex-col  ", classWrap)}>
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
