interface ButtonProps {
  title: string
  fontSize: string
  className?: string
}

export const HeadingBulgatti = ({
  title,
  fontSize,
  className,
}: ButtonProps) => {
  return (
    <h1 className={`text-[#FFCC00] ${fontSize} font-bulgatti ${className}`}>
      {title}
    </h1>
  )
}

export const HeadingMonument = ({
  title,
  fontSize,
  className,
}: ButtonProps) => {
  return (
    <h1 className={`text-black ${fontSize} font-monument ${className}`}>
      {title}
    </h1>
  )
}
