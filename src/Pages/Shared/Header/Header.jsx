
import  logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center mt-[40px]'>
            <img className='mx-auto' src={logo} alt="" srcset="" />
            <p className='mt-[20px] text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p  className='mt-[10px] font-medium text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;