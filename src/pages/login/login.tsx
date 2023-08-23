import { FormEvent, useRef, MouseEvent } from 'react';
import { HeaderLayout } from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks/use-dispatch';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/use-select';
import { AppRoute } from '../../const';
import { loginAction } from '../../store/api-actions';
import { TCity } from '../../types/city';
import { getCurrentCity } from '../../store/offer-process/selectors';
import { setCitySelect } from '../../store/offer-process/offer-process';

function LoginPage(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const currentCity = useAppSelector(getCurrentCity);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(
        loginAction({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        })
      );
    }
  };

  const handleButtonClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const city = e.currentTarget.dataset.city as unknown as TCity;
    if (city === undefined) {
      return;
    }
    dispatch(setCitySelect(city));
    navigate(AppRoute.Main);
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{'6 cities - Login Screen'}</title>
      </Helmet>
      <HeaderLayout />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to="#"
                data-city={currentCity.name}
                onClick={handleButtonClick}
              >
                <span>{currentCity.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
