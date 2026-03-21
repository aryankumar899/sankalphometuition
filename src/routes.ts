import { createBrowserRouter } from "react-router";
import { Layout } from "./components/sankalp/Layout";
import { HomePage } from "./components/sankalp/HomePage";
import { ServicesPage } from "./components/sankalp/ServicesPage";
import { AboutPage } from "./components/sankalp/AboutPage";
import { ContactPage } from "./components/sankalp/ContactPage";
import { TestimonialsPage } from "./components/sankalp/TestimonialsPage";
import { BlogPage } from "./components/sankalp/BlogPage";
import { FAQPage } from "./components/sankalp/FAQPage";
import { DashboardPage } from "./components/sankalp/DashboardPage";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "testimonials", Component: TestimonialsPage },
      { path: "blog", Component: BlogPage },
      { path: "faq", Component: FAQPage },
      { path: "dashboard", Component: DashboardPage },

    ],
  },
]);
