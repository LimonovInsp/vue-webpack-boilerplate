export const actions = {
    async getList ({commit}) {
        const listDataQuery = await fetch('http://api.plos.org/search?q=title:DNA');
        const response = await listDataQuery.json();
        commit('addNewItem', response);
    },
}