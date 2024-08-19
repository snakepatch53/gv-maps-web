import { fetchAdapter } from "./apiConfig";

const resource = "fibers";

export async function getFibers() {
    const response = await fetchAdapter({
        resource: resource + "?includeFiberMarkers=true",
        all: true,
        // printResponse: true,
    });
    return response;
}

export async function getFibersByMapId(map_id) {
    const response = await fetchAdapter({
        resource: resource + "/get-by-map-id/" + map_id + "?includeFiberMarkers=true",
        all: true,
        // printResponse: true,
    });
    return response;
}

export async function newFiber(data) {
    const response = await fetchAdapter({
        resource,
        data,
        method: "POST",
        all: true,
    });
    return response;
}

export async function updateFiber(id, data) {
    const response = await fetchAdapter({
        resource: resource + "/" + id,
        data,
        method: "PUT",
        all: true,
        // printResponse: true,
    });
    return response;
}


export async function destroyFiber(id) {
    const response = await fetchAdapter({
        resource: resource + "/" + id,
        method: "DELETE",
        all: true,
    });
    return response;
}
