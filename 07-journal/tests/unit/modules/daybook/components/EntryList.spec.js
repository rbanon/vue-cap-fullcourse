import { createStore } from "vuex";
import { VueWrapper, shallowMount } from "@vue/test-utils";
import EntryListComponent from "@/modules/daybook/components/EntryListComponent.vue";
import { journalState } from "../../../mock-data/test-journal-state";
import journal from "@/modules/daybook/store/journal";

const createVuexStore = (initialState) =>
  createStore({
    modules: {
      journal: {
        ...journal,
        state: { ...initialState },
      },
    },
  });
describe("Pruebas en el Entry List", () => {
  // const journalMockModule = {
  //   namespaced: true,
  //   getters: { getEntriesByTerm },
  //   state: () => ({
  //     isLoading: false,
  //     entries: journalState.entries,
  //   }),
  // };

  // const mockRouter = {
  //   push: jest.fn(),
  // };

  // const store = createStore({
  //   modules: {
  //     journal: {
  //       ...journalMockModule,
  //     },
  //   },
  // });

  const store = createVuexStore(journalState);

  const mockRouter = {
    push: jest.fn(),
  };

  let wrapper = VueWrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallowMount(EntryListComponent, {
      global: {
        mocks: {
          $router: mockRouter,
        },
        plugins: [store],
      },
    });
  });
  it("Hace match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("Debe de llamar el getEntriesByTerm sin termino y mostrar 2 entradas", () => {
    console.log(wrapper.html());

    expect(wrapper.findAll("entry-component-stub").length).toBe(2);
  });

  it("Debe de llamar el getEntriesByTerm y filtrar las entradas", async () => {
    const input = wrapper.find("input");
    await input.setValue("Probando");

    expect(wrapper.findAll("entry-component-stub").length).toBe(1);
  });

  it("El boton de nuevo debe de redireccionar a /new", () => {
    wrapper.find("button").trigger("click");

    expect(mockRouter.push).toHaveBeenCalledWith({
      name: "entry",
      params: { id: "new" },
    });
  });
});
