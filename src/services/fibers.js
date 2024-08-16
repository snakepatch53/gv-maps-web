import { fetchAdapter } from "./apiConfig";

const resource = "fibers";

function mapNames(data) {
    if (!data) return [];
    return data.map(({ ...props }) => ({
        ...props,
    }));
}

export async function getFibers() {
    const response = await fetchAdapter({
        resource: resource + "?includeFiberMarkers=true",
        // printResponse: true,
    });
    return mapNames(response);
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

export async function updateFiber({ id, data }) {
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


export async function destroyFiber(id) {
    const response = await fetchAdapter({
        resource: resource + "/" + id,
        method: "DELETE",
        all: true,
    });
    return response;
}
