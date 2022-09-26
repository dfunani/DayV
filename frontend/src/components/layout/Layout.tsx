import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";


type props = {
  appIcons: any[],
  children: React.ReactNode,
  app: any
}

function Layout({appIcons, children, app}: props) {
  return (
    <div className="Layout">
      <Header app={app}/>
      <Menu icons={appIcons} app={app} />
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
