import { shallowMount } from "@vue/test-utils";
import FabComponent from "@/modules/daybook/components/FabComponent.vue";

describe("Pruebas en el FabComponent", () => {
  const wrapper = shallowMount(FabComponent);
  it("debe de renderizar el componente correctamente", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("Debe de mostrar el ícono por defecto", () => {
    const iTag = wrapper.find("i");
    expect(iTag.classes("fa-plus")).toBeTruthy();
  });

  it("Debe de mostrar el ícono por argumento: fa-circle", () => {
    const wrapper = shallowMount(FabComponent, {
      props: {
        icon: "fa-circle",
      },
    });
    const iTag = wrapper.find("i");
    expect(iTag.classes("fa-circle")).toBeTruthy();
  });

  it("Debe de emitir el evento on:click cuando se hace click", () => {
    wrapper.find("button").trigger("click");
    expect(wrapper.emitted("on:click")).toHaveLength(1);
  });
});
