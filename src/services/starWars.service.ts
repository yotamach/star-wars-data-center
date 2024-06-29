
const BASE_URL = 'https://swapi.dev/api';

const getCategorys = async () => {
    return await fetch(`${BASE_URL}/`);
}

const getItemsByCategory = async (category: string, search?: string) => {
    return await fetch(`${BASE_URL}/${category}${search ? `?search=${search}` : ''}`);
}

export {
    getCategorys,
    getItemsByCategory
}