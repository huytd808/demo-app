export const reorder = (list, start, end) => {
    const [removed] = list.splice(start, 1);
    list.splice(end, 0, removed);

    return list;
};
