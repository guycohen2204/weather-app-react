

export const getCitiesList = () => {
    const lst = localStorage.getItem('citiesList');
    if (lst) {
        return JSON.parse(lst);
    }
    return [];
}

export const setCitiesList = (lst: string[]): void => {
    localStorage.setItem('citiesList', JSON.stringify(lst));
}