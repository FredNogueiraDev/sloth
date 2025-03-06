import logo from '../assets/logo/logo-light.svg';

export function PageLoader(){
  return (
    <div className="w-full h-full flex justify-center items-center bg-green-darker">
      <div className="flex flex-col justify-center items-center gap-3">
        <img src={logo} alt="Logo" className="w-14 h-14" />
        <div className="flex text-purple-light text-lg">
          <p className='font-medium text-3xl text-green-light'>sloth</p>
        </div>
      </div>
    </div>
  )
}
