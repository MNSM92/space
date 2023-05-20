

export default function EvenBox({ xl, children }) {

    console.log(xl[2])
    
    return (
        <div
          className={`flex flex-col space-y-6 items-center justify-start pr-1 absolute xl:w-[${xl[0]}px] md:w-[450px] xl:h-[${xl[1]}px] md:h-[334px] md:left-[174px] xl:left-[${xl[2]}] xl:top-[${xl[3]}${'%'}] md:top-[202px] w-[327px] h-[276px] left-[calc(50% - 175.5px)] top-[112px]`}
        >
          {children}
        </div>
      );
      
  }