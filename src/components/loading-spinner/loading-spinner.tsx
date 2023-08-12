import { Bars } from 'react-loader-spinner';

function SpinnerLoader(): JSX.Element {
  return (
    <Bars
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible
    />
  );
}

export default SpinnerLoader;
