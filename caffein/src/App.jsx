import Layout from "./components/Layout";
import Hero from "./components/Hero";
import CoffeeForm from "./components/CoffeeForm";
import Stats from "./components/Stats";
import History from "./components/History";
import { useAuth } from "./context/AuthContext";
import { coffeeConsumptionHistory } from "./utils";

function App() {
  const { globalUser, isLoading, globalData } = useAuth()
  const isAuthenticated = globalUser
  const isData = globalData && !!Object.keys(globalData || {}).length

  const authenticatedContent = (
    <>
      <Stats />
      <History />
    </>
  )

  return (
    <Layout> {/*nội dung trong Layout chính là phần children của Layout*/}
      <Hero />
      <CoffeeForm isAuthenticated={isAuthenticated} />
      {(isAuthenticated && isLoading) && (
        <p>Loading data...</p>
      )}
      {(isAuthenticated && isData) && (authenticatedContent)} {/*nếu isAuthenticated không false thì hiển thị authenticatedContent*/}
    </Layout>
  )
}

export default App
