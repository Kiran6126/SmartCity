import { RouterProvider } from 'react-router';
import { router } from './routes';
import { AppProvider } from './context/AppContext';
import { jsx as _jsx } from "react/jsx-runtime";
export default function App() {
  return /*#__PURE__*/_jsx(AppProvider, {
    children: /*#__PURE__*/_jsx(RouterProvider, {
      router: router
    })
  });
}
