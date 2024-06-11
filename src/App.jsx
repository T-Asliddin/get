import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { TaskOne ,TaskTwo ,TaskThree ,TaskFour} from "./page";
import { ResponsiveDrawer } from "./componenets";



const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<ResponsiveDrawer/>}>
        <Route path="/" element={<TaskOne/>}/>
        <Route path="/tasktwo" element={<TaskTwo/>}/>
        <Route path="/taskthree" element={<TaskThree/>}/>
        <Route path="/taskfour" element={<TaskFour/>}/>
       
      </Route>
      
    )
  );
  return <RouterProvider router={routes} />;
};

export default App;
