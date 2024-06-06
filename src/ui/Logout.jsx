import useLogout from "../features/authentication/useLogout";

import { HiOutlineLogout } from "react-icons/hi";
import ButtonIcon from "./ButtonIcon";
import SpinnerMini from "./SpinnerMini";

const Logout = () => {
  const { isLoading, signOut } = useLogout();
  return (
    <ButtonIcon disabled={isLoading} onClick={signOut}>
      {isLoading ? <SpinnerMini /> : <HiOutlineLogout />}
    </ButtonIcon>
  );
};

export default Logout;
