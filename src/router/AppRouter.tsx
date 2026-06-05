import { Suspense, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import BackToTopButton from "@/components/BackToTopButton";
import { routes } from "./routeConfig";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            index={route.index}
            element={
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <route.component />
              </motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

const AppRouter = () => {
  const basename =
    import.meta.env.BASE_URL === "/" ? undefined : import.meta.env.BASE_URL;

  return (
    <BrowserRouter
      basename={basename}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ScrollToTop />
      <Suspense
        fallback={
          <div className='flex min-h-screen items-center justify-center text-gray-600'>
            Loading...
          </div>
        }
      >
        <AnimatedRoutes />
        <BackToTopButton />
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
