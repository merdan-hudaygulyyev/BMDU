import logo from '../../../public/images/logo.png'


export default function Header() {
  return (
      <div className="flex items-center gap-2 font-Quicksand p-3">
        <img src={logo} className="w-10 h-10 " />
        <h3 className="font-Poppins text-[#7E5CAD] text-xl">
          Bilim Maglumat Dolandyrys Ulgamy  
        </h3>
      </div>
  );
}
