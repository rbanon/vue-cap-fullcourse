import { createStore } from "vuex";
import journal from "@/modules/daybook/store/journal";
import { journalState } from "../../../../mock-data/test-journal-state";

const createVuexStore = (initialState) =>
  createStore({
    modules: {
      journal: {
        ...journal,
        state: { ...initialState },
      },
    },
  });
describe("Pruebas en el Journal Module ", () => {
  // Básicas
  it("Este es el estado inicial, debe de tener este state", () => {
    const store = createVuexStore(journalState);
    const { isLoading, entries } = store.state.journal;

    expect(isLoading).toBeFalsy();
    expect(entries).toEqual(journalState.entries);
  });

  // Mutations
  it("mutation: setEntries", () => {
    const store = createVuexStore({ isLoading: true, entries: [] });

    store.commit("journal/setEntries", journalState.entries);
    expect(store.state.journal.entries.length).toBe(2);

    store.commit("journal/setEntries", journalState.entries);
    expect(store.state.journal.entries.length).toBe(4);

    expect(store.state.journal.isLoading).toBeFalsy();
  });

  it("mutation: updateEntry", () => {
    const store = createVuexStore(journalState);
    const updateEntry = {
      id: "-NcgH9H98sQR1f8BBVGH",
      date: 1692960068403,
      text: "Hola mundo desde pruebas unitarias",
    };
    store.commit("journal/updateEntry", updateEntry);
    const storeEntries = store.state.journal.entries;
    expect(storeEntries.length).toBe(2);
    expect(storeEntries.find((e) => e.id === updateEntry.id)).toEqual(
      updateEntry
    );
  });

  it("mutation: addEntry and deleteEntry", () => {
    const store = createVuexStore(journalState);
    const newEntry = {
      id: "ABC-123",
      date: 1692960068403,
      text: "Hola mundo desde pruebas unitarias",
    };
    store.commit("journal/addEntry", newEntry);

    const storeEntries = store.state.journal.entries;
    expect(storeEntries.length).toBe(3);
    expect(storeEntries.find((e) => e.id === newEntry.id)).toBeTruthy();

    store.commit("journal/deleteEntry", newEntry.id);

    const newStoreEntries = store.state.journal.entries;
    expect(newStoreEntries.length).toBe(2);
    expect(newStoreEntries.find((e) => e.id === newEntry.id)).toBeFalsy();
  });

  // Getters
  it("getters: getEntriesByTerm and getEntryById", () => {
    const store = createVuexStore(journalState);
    const [entry1] = journalState.entries;

    expect(store.getters["journal/getEntriesByTerm"]("").length).toBe(2);
    expect(store.getters["journal/getEntriesByTerm"]("Hola mundo").length).toBe(
      1
    );
    expect(store.getters["journal/getEntriesByTerm"]("Hola mundo")).toEqual([
      entry1,
    ]);

    expect(store.getters["journal/getEntryById"](entry1.id)).toEqual(entry1);
  });

  // Actions
  it("actions: loadEntries", async () => {
    const store = createVuexStore({ isLoading: true, entries: [] });
    await store.dispatch("journal/loadEntries");

    expect(store.state.journal.entries.length).toBe(3); // Las 3 entradas de Firebase
  });

  it("actions: updateEntry", async () => {
    const store = createVuexStore(journalState);
    const updateEntry = {
      id: "-NcgH9H98sQR1f8BBVGH",
      text: "Probamos Update Entry",
      date: 1692960068403,
    };
    await store.dispatch("journal/updateEntry", updateEntry);

    const storeEntries = store.state.journal.entries;
    expect(storeEntries.length).toBe(2);
    expect(storeEntries.find((e) => e.id === updateEntry.id)).toEqual({
      id: "-NcgH9H98sQR1f8BBVGH",
      text: "Probamos Update Entry",
      date: 1692960068403,
    });
  });

  it("actions: createEntry and deleteEntry", async () => {
    const store = createVuexStore(journalState);
    const newEntry = {
      date: 1693481964402,
      text: "Nueva entrada desde pruebas unitarias",
    };
    const id = await store.dispatch("journal/createEntry", newEntry);

    expect(typeof id).toBe("string");

    const storeEntries = store.state.journal.entries;

    expect(storeEntries.find((e) => e.id === id)).toBeTruthy();

    expect(storeEntries.length).toBe(3);

    await store.dispatch("journal/deleteEntry", id);

    const newStoreEntries = store.state.journal.entries;

    expect(newStoreEntries.find((e) => e.id === id)).toBeFalsy();
    expect(newStoreEntries.length).toBe(2);
  });
});
