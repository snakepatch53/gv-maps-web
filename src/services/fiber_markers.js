import { fetchAdapter } from "./apiConfig";

const resource = "fiber_markers";

function mapNames(data) {
    if (!data) return [];
    return data.map(({ ...props }) => ({
        ...props,
    }));
}

export async function getFiberMarkers() {
    const response = await fetchAdapter({
        resource: resource + "?includeFiber=true",
        // printResponse: true,
    });
    return mapNames(response);
}

export async function newFiberMarker(data) {
    const response = await fetchAdapter({
        resource,
        data,
        method: "POST",
        all: true,
    });
    return response;
}

export async function updateFiberMarker(id, data) {
    const response = await fetchAdapter({
        resource: resource + "/" + id,
        data,
        method: "PUT",
        all: true,
        // printResponse: true,
    });
    return response;
}


export async function destroyFiberMarker(id) {
    const response = await fetchAdapter({
        resource: resource + "/" + id,
        method: "DELETE",
        all: true,
    });
    return response;
}
