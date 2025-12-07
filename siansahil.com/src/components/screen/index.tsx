type ScreenProps = {
    children: React.ReactNode
    backgroundColor?: string
    half?: boolean,
    minHeight?: boolean
}

const Screen = ({children, backgroundColor="#EDEDED", half, minHeight}:ScreenProps) => {
    return (
        <div style={{backgroundColor: backgroundColor}}>
            { minHeight ?
            <div style={{minHeight: half ? "50vh" : "100vh"}}  className={" w-full flex"}>
                {children}
            </div>
            : <div style={{height: half ? "50vh" : "100vh"}}  className={" w-full flex"}>
            {children}
            </div> }
        </div>

    )
}

export default Screen