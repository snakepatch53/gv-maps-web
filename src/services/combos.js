import { fetchAdapter } from "./apiConfig";



export async function getPublicMap(map_id) {
    const response = await fetchAdapter({
        resource: "combos/get-public-map" + "/" + map_id,
        all: true,
        // printResponse: true,
    });
    return response;
}
