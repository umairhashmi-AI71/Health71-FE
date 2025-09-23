export default function WelcomeCard() {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);

  return (
    <div className="welcome-bg rounded-xl  flex  items-end">
      <div className="px-13 pt-12 pb-9 w-[75%]">
        <p className="text-base mb-12">{formattedDate}</p>
        <h1 className="text-[34px] mb-4 mackinac font-normal">Welcome back, Neila!</h1>
        <p className="text-lg">
          Together, we saved ~3.2 hours today 🙌. A few cases remain where your
          expertise is required.
        </p>
      </div>
      <div>
        <img src={"welcome-avatar.png"} className="w-[232px] " />
      </div>
    </div>
  );
}
