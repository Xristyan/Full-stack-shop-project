import Modal from "../UI/Modal";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import { useSelector } from "react-redux";
const FormChoice = (props) => {
  const toggleForm = useSelector((state) => state.changeForm.toggleForm);
  return (
    <Modal className={"authContiner"} onClose={props.onClose}>
      {toggleForm && <LoginForm />}
      {toggleForm || <RegisterForm />}
    </Modal>
  );
};
export default FormChoice;
