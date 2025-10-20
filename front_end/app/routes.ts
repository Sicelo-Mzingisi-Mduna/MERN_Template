import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/layouts/home_layout.tsx", [
    index("routes/root/test_root.tsx"),
    // index("routes/root/home_layout_indexPage.tsx"),
    route("create", "routes/pages/home_layout_createPage.tsx"),
    route("note/:id", "routes/pages/home_layout_noteDetailPage.tsx"),
    route("edit/:id", "routes/pages/home_layout_noteEditPage.tsx"),

    // 👇 fallback route for anything unmatched
    route("*", "routes/pages/notFound.tsx"),
  ]),
] satisfies RouteConfig;
