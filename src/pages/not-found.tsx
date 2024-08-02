import ButtonComponent from "../components/Button"

const NotFoundComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
        <h1 className="text-[54px] font-semibold pb-[12px]">The requested link does not exist !</h1>
        <ButtonComponent title="Click here to go back" onClick={() => history.back()} />
    </div>
  )
}

export default NotFoundComponent