import { fetchAdapter } from "./apiConfig";

const resource = "maps";

function mapNames(data) {
    return data.map(({ ...props }) => ({
        ...props,
    }));
}

export async function getMaps() {
    const response = await fetchAdapter({
        resource: resource + "?includeUser=true&includeUserEntity=true",
        // printResponse: true,
    });
    return mapNames(response);
}

export async function storageMaps({ data }) {
    const response = await fetchAdapter({
        resource,
        data,
        method: "POST",
        all: true,
        formData: true,
    });
    return response;
}

export async function updateMaps({ id, data }) {
    const response = await fetchAdapter({
        resource: resource + "/" + id,
        data,
        method: "POST",
        all: true,
        formData: true,
        // printResponse: true,
    });
    return response;
}

export async function destroyMaps({ id }) {
    const response = await fetchAdapter({
        resource: resource + "/" + id,
        method: "DELETE",
        all: true,
    });
    return response;
}
