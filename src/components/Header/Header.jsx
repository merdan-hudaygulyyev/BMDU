import logo from '../../../public/images/1.png'


export default function Header() {
  return (
      <div className="flex items-center gap-2 font-Quicksand p-3">
        <img src={logo} className="w-8 h-8 " />
        <h3 className="font-Poppins text-gray-500 text-xl">
          Bilim Maglumat Dolandyrys Ulgamy  
        </h3>
      </div>
  );
}
