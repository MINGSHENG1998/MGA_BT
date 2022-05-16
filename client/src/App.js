import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {/* <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="admin">
              <Route index element={<User_List />} />
              <Route path=":adminId" element={<Admin_Details />} />
              <Route path="new" element={<New_Admin />} />
            </Route>
            <Route path="driver">
              <Route index element={<User_List />} />
              <Route path=":driverId" element={<Driver_Details />} />
            </Route>
            <Route path="cust">
              <Route index element={<User_List />} />
              <Route path=":custId" element={<Cust_Details />} />
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
