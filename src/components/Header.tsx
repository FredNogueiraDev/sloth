import logoLight from '../assets/logo/logo-light.svg'

export function Header() {
  return (
    <header className="font-medium p-3 flex justify-between items-center bg-green-darker">
      <div className="flex w-full justify-center">
        <img src={logoLight} alt="Logo" className='w-8 mr-2' />
        <p className='font-medium text-2xl text-green-light'>sloth</p>
      </div>
    </header>
  );
}
