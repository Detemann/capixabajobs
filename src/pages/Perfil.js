import HeaderNavbar from "../components/HeaderNavbar/HeaderNavbar";
import UserInfoCard from "../components/Perfil/UserInfoCard";

function Perfil() {
  return (
    <div className='mx-5'>
      <HeaderNavbar logoFull={ false } showUserIcon={ false } userAvatar={ true } />
      <UserInfoCard />
    </div>
      
  );
}

export default Perfil;
