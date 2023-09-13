export default {
  path: "/auth",
  name: "auth",
  component: () =>
    import(/* webpackChunkName: "auth" */ "@/modules/auth/layouts/AuthLayout"),
  children: [],
};
