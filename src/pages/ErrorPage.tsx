import MainNavigation from "../components/MainNavigation";
import "./ErrorPage.css";
const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <div className="ErrorPage">
        <h1>
          Oops! It looks like the page you're seeking is taking a coffee break.
          How about we redirect you back to our main menu to find exactly what
          you're looking for? Cheers to getting you back on track!
        </h1>
      </div>
    </>
  );
};
export default ErrorPage;
