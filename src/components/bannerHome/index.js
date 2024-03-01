export const BannerHome = ({ children, content }) => {
  return (
    <>
      <div
        data-testid="banner-background"
        className="h-80 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('https://deliriumnerd.com/wp-content/uploads/2022/09/Ruptura-serie.jpg')`,
        }}
      >
        <div className="absolute top-16 h-80 w-full brightness-200 bg-sky-900 bg-opacity-70"></div>
      </div>
      <div className="px-6 py-12 grid gap-6 absolute top-16 h-80 w-full">
        <div className="font-bold text-white">
          <h1 className="text-5xl">{content.welcome}</h1>
          <h2 className="text-3xl">{content.description}</h2>
        </div>
        {children}
      </div>
    </>
  );
};
