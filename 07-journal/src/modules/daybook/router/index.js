export default {
  path: "/daybook",
  name: "daybook",
  component: () => import("@/modules/daybook/layouts/DayBookLayout.vue"),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () =>
        import("@/modules/daybook/views/NoEntrySelectedView.vue"),
    },
    {
      path: ":id",
      name: "entry",
      component: () => import("@/modules/daybook/views/EntryView.vue"),
    },
  ],
};
