import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="h-screen w-screen flex flex-col items-center justify-center"
    >
      <h1 className="text-7xl font-bold">Oops!</h1>
      <div className="mt-6 text-2xl flex flex-col items-center" >
        <p className="">Sorry, an unexpected error has occurred.</p>
        <div>
          <i className="block">404 {error.statusText || error.message}</i>
        </div>
      </div>
    </div>
  );
}
