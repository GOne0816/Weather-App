const NoResultDiv = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <img
        className="p-4 m-4"
        src="icons/no-result.svg"
        alt="No Result Found"
      />
      <h3 className="font-semibold text-xl">No Result Found</h3>
      <p className="text-center leading-tight pb-8">We&apos;re unable to retrieve the weather details. Ensure you&apos;ve entered a valid city or try again later.</p>
    </div>
  );
}

export default NoResultDiv
