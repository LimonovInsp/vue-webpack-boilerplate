export const mutations = {
    addNewItem(state, payload) {
        state.items = payload.response.docs.map(doc => doc.title_display);
    },
    addNumber(state, newNumber) {
        state.number += newNumber;
    }
}
