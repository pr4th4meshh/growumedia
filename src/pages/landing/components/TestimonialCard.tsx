interface TestimonialCardProps {
    message: string
    avatar: string
    username: string
    position: string
  }
  
  const TestimonialCard = ({
    message,
    avatar,
    username,
    position,
  }: TestimonialCardProps) => {
    return (
      <div className="bg-white py-[24px] px-[32px] rounded-[16px] w-[246px] h-[176px] shadow-md flex flex-col justify-between">
        <p className="text-[11px] text-gray-600 text-wrap">{message}</p>
        <div className="flex items-center p-6 justify-center">
          <img
            src={avatar}
            alt="User Avatar"
            className="h-[40px] w-[40px] rounded-full mr-3"
          />
          <div className="flex flex-col">
            <h1 className="text-[16px] text-black">{username}</h1>
            <span className="text-[#9B9997] text-[11px]">{position}</span>
          </div>
        </div>
      </div>
    )
  }
  
  export default TestimonialCard;  