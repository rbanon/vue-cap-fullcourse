import daybookRouter from "@/modules/daybook/router";

describe("Pruebas en el router module del Daybook", () => {
  it("El index del router debe de tener esta configuración", async () => {
    expect(daybookRouter).toMatchObject({
      name: "daybook",
      component: expect.any(Function),
      children: [
        {
          path: "",
          name: "no-entry",
          component: expect.any(Function),
        },
        {
          path: ":id",
          name: "entry",
          component: expect.any(Function),
          props: expect.any(Function),
        },
      ],
    });

    // expect((await daybookRouter.children[0].component()).default.name).toBe(
    //   "NoEntrySelectedView"
    // );

    // expect((await daybookRouter.children[1].component()).default.name).toBe(
    //   "EntryView"
    // );

    const promiseRoutes = [];
    daybookRouter.children.forEach((child) => {
      promiseRoutes.push(child.component());
    });
    const routes = (await Promise.all(promiseRoutes)).map(
      (r) => r.default.name
    );

    expect(routes).toContain("NoEntrySelectedView");
    expect(routes).toContain("EntryView");
  });

  it("Las rutas hijas traen los componentes correctos", async () => {
    const NoEntryRoute = daybookRouter.children.find(
      (child) => child.name === "no-entry"
    );
    const EntryRoute = daybookRouter.children.find(
      (child) => child.name === "entry"
    );

    expect((await NoEntryRoute.component()).default.name).toBe(
      "NoEntrySelectedView"
    );
    expect((await EntryRoute.component()).default.name).toBe("EntryView");
  });

  it("Debe de retornar el ID de la ruta", () => {
    const route = {
      params: {
        id: "ABC-123",
      },
    };

    // expect(daybookRouter.children[1].props(route)).toEqual({
    //   id: "ABC-123",
    // });
    const entryRoute = daybookRouter.children.find(
      (child) => child.name === "entry"
    );
    expect(entryRoute.props(route)).toEqual({
      id: "ABC-123",
    });
  });
});
