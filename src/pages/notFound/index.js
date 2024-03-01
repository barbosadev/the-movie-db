export const NotFound = () => {
  return (
    <div className="bg-slate-800 text-white w-full h-svh flex items-center justify-center flex-col gap-4">
      <h1 className="text-3xl font-bold">Xiiii, você se perdeu pelo site!</h1>
      <h2 className="text-lg">A página que você tentou acessar não existe.</h2>

      <a className="underline cursor-pointer text-sky-500" href="/">
        Voltar para o Início
      </a>
    </div>
  );
};
