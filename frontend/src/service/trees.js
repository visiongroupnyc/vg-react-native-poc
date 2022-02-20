const host = 'http://192.168.10.124:3000';

export async function get() {
    try {
        const response = await fetch(`${host}/core/trees?page=1&limit=16`);
        const responseJson = await response.json();
        return responseJson; 
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
};