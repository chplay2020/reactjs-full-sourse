import Layout from "./components/Layout";
import Hero from "./components/Hero";
import CoffeeForm from "./components/CoffeeForm";
import Stats from "./components/Stats";
import History from "./components/History";

function App() {

  const isAuthenticated = false;

  const authenticatedContent = (
    <>
      <Stats />
      <History />
    </>
  )

  return (
    <Layout> {/*nội dung trong Layout chính là phần children của Layout*/}
      <Hero />
      <CoffeeForm />
      {isAuthenticated && (authenticatedContent)} {/*nếu isAuthenticated không falsefalse thì hiển thị authenticatedContent*/}
    </Layout>
  )
}

export default App
