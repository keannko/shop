import { useSelector } from "react-redux";


const Cabinet = (props) => {
  const activeUser = useSelector(state => state.modal.activeUser)
  console.log(activeUser)
  return (
    <>
      <div>
        {activeUser}
      </div>
    </>
  );
};

export default Cabinet;
