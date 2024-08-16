import { fetchAdapter } from "./apiConfig";

const resource = "markers";

function mapNames(data) {
    if (!data) return [];
    return data.map(({ ...props }) => ({
        ...props,
    }));
}

export async function getMarkers() {
    const response = await fetchAdapter({
        resource,
        // printResponse: true,
    });
    return mapNames(response);
}

export async function newMarker(data) {
    const response = await fetchAdapter({
        resource,
        data,
        method: "POST",
        all: true,
    });
    return response;
}

export async function updateMarker({ id, data }) {
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

export async function moveMarker(id, data) {
    const response = await fetchAdapter({
        resource: "move-marker/" + id,
        data,
        method: "PUT",
        all: true,
        // formData: true,
        // printResponse: true,
    });
    return response;
}

export async function destroyMarker(id) {
    const response = await fetchAdapter({
        resource: resource + "/" + id,
        method: "DELETE",
        all: true,
    });
    return response;
}
