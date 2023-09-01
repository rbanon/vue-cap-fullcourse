import { shallowMount } from "@vue/test-utils";
import EntryComponent from "@/modules/daybook/components/EntryComponent";
import { journalState } from "../../../mock-data/test-journal-state";

describe("Pruebas en el Entry Component", () => {
  const mockRouter = {
    push: jest.fn(),
  };

  const wrapper = shallowMount(EntryComponent, {
    props: {
      entry: journalState.entries[1],
    },
    global: {
      mocks: {
        $router: mockRouter,
      },
    },
  });

  it("Debe de coincidir con el del snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("Debe de redireccionar al hacer click en el entry-container", () => {
    const entryContainer = wrapper.find(".entry-container");
    entryContainer.trigger("click");

    expect(mockRouter.push).toHaveBeenCalledWith({
      name: "entry",
      params: { id: journalState.entries[1].id },
    });

    expect(mockRouter.push).toHaveBeenCalledTimes(1);
  });

  it("Pruebas en las propiedades computadas", () => {
    expect(wrapper.vm.day).toBe(1);
    expect(wrapper.vm.month).toBe("Septiembre");
    expect(wrapper.vm.yearDay).toBe("2023, Viernes");
  });
});
