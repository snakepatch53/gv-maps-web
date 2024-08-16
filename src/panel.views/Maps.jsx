import CrudHead from "../panel.components/CrudHead";
import { CrudTable, CrudTableTdFlex, CrudTableTdText } from "../panel.components/CrudTable";
import { CrudForm, CrudFormInput } from "../panel.components/CrudForm";
import CrudConfirm from "../panel.components/CrudConfirm";
import CrudProgress from "../panel.components/CrudProgress";
import Button from "../panel.components/Button";
import { faMap, faPen, faTrash, faUsers } from "@fortawesome/free-solid-svg-icons";
import "react-notifications-component/dist/theme.css";
import useCrudPanel from "../hooks/useCrudPanel";
import PageContent from "../components/PageContent";
import { destroyMaps, getMaps, storageMaps, updateMaps } from "../services/maps";
import { Link } from "react-router-dom";

export default function Maps() {
    const {
        entityName,
        pluralEntityName,
        head,
        table,
        form,
        confirm,
        progress,
        datalist,
        $form,
        handleModeNew,
        handleModeEdit,
        handleModeDelete,
        hanleCancel,
        handleSubmit,
        handleDelete,
        searchValue,
        searchOnChange,
    } = useCrudPanel({
        entityName: "Mapa",
        pluralEntityName: "Mapas",
        // excludeFieldsValidationEdit: ["password", "photo"],
        searchFields: ["name"],
        // isStorageMultipartFormData: true,
        // isUpdateMultipartFormData: true,
        crudGet: getMaps,
        crudStorage: storageMaps,
        crudUpdate: updateMaps,
        crudDestroy: destroyMaps,
    });

    return (
        <PageContent className=" flex flex-col gap-7 w-full p-10 ">
            <CrudHead
                title={pluralEntityName}
                icon={faUsers}
                isOpen={head}
                onClickNew={handleModeNew}
                searchValue={searchValue}
                searchOnChange={searchOnChange}
            />

            <CrudTable
                titles={["Nombre", "Empresa", "Usuario"]}
                dataList={datalist}
                isOpen={table}
                onRowPrint={(item) => (
                    <tr key={item.id}>
                        <CrudTableTdText value={item.name} />
                        <CrudTableTdText value={item.entity?.name} />
                        <CrudTableTdText value={item.user?.name} />
                        <CrudTableTdFlex>
                            <Button
                                tag={Link}
                                to={`/panel/map/${item.id}`}
                                text="Abrir"
                                icon={faMap}
                                type="edit"
                                className=" bg-[#5849be] "
                                onClick={() => handleModeEdit(item)}
                            />
                            <Button
                                text="Editar"
                                icon={faPen}
                                type="edit"
                                onClick={() => handleModeEdit(item)}
                            />
                            <Button
                                text="Borrar"
                                icon={faTrash}
                                type="delete"
                                onClick={() => handleModeDelete(item)}
                            />
                        </CrudTableTdFlex>
                    </tr>
                )}
            />

            <CrudForm
                title={entityName}
                isOpen={form}
                onClickCancel={hanleCancel}
                onSubmit={handleSubmit}
                // message={msg}
                formRef={$form}
            >
                <CrudFormInput
                    label="Nombres"
                    placeholder="Escriba los nombres"
                    name="name"
                    required
                />
                <CrudFormInput
                    label="Apellidos"
                    placeholder="Escriba los apellidos"
                    name="lastname"
                    required
                />
                <CrudFormInput
                    label="Celular"
                    placeholder="Escriba su numero de celular"
                    name="phone"
                    required
                />
                <CrudFormInput
                    label="Direccion"
                    placeholder="Escriba una direccion"
                    name="address"
                    required
                />
                <CrudFormInput
                    label="Correo Electronico"
                    placeholder="Escriba el correo electronico"
                    name="email"
                    required
                />
                <CrudFormInput
                    label="Contraseña"
                    placeholder="Escriba la contraseña"
                    type="password"
                    name="password"
                    required
                />
                <CrudFormInput
                    name="role"
                    label="Privilegios"
                    type="radio"
                    radioOptions={[
                        { value: "Administrador", label: "Administrador", checked: true },
                        { value: "Vendedor", label: "Vendedor" },
                        { value: "Cliente", label: "Cliente" },
                    ]}
                    required
                />
                <CrudFormInput
                    name="state"
                    label="Estado"
                    type="radio"
                    radioOptions={[
                        { value: "Activo", label: "Activo", checked: true },
                        { value: "Inactivo", label: "Inactivo" },
                    ]}
                    required
                />
                <CrudFormInput label="Foto" name="photo" type="file" />
            </CrudForm>

            <CrudConfirm
                isOpen={confirm}
                text="¿Seguro de eliminar este usuario?"
                onClickDelete={handleDelete}
                onClickCancel={hanleCancel}
            />

            <CrudProgress isOpen={progress} text="Procesando tu solicitud..." />
        </PageContent>
    );
}
