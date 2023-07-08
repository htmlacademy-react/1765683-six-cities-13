import MainPage from '../../pages/main/main';

type AppProps = {
  offersCount: number;
};

function App({offersCount}: AppProps) {


  return <MainPage offersCount={offersCount} />;
}

export default App ;
