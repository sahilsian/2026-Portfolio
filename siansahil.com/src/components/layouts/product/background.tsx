export const Background = () => {
    return (
        <div className={"absolute left-0 z-[0] w-full h-full "}>
            <div className={"MarginLine relative bg-[#F67E7E] opacity-[46%] w-[1px] h-[100%] left-[21px] sm:hidden md:hidden lg:block lg:left-[86px]"}
                 style={{
                     WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0), black 20%, black 80%, rgba(0,0,0,0))',
                     WebkitMaskRepeat: 'no-repeat',
                     WebkitMaskSize: '100% 100%',
                     maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0), black 20%, black 80%, rgba(0,0,0,0))',
                     maskRepeat: 'no-repeat',
                     maskSize: '100% 100%',
                 }}
            ></div>
            <div className={"MarginLine absolute bg-[#6AAAF6] opacity-[46%] w-[100%] h-[1px] top-[558px] block sm:hidden md:hidden lg:block  lg:top-[80px]"}></div>
        </div>
    )
}

export default Background