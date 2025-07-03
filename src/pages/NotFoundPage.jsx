function NotFoundPage() {
  return(
    <div className="bg-background w-screen h-screen grid place-content-center gap-4">
      <h1 className="font-ibm text-4xl text-center text-secondary select-none">404 Page Not Found</h1>
      
      <a href="/" className="font-ibm text-2xl text-center text-secondary-dark underline">back to home</a>
    </div>
  );
}

export default NotFoundPage;
