type ScreenProps = {
    children: React.ReactNode;
    backgroundColor?: string;
    classOverride?: string;
}

const Screen = ({children, backgroundColor="#EDEDED", classOverride}:ScreenProps) => {
    return (
        <div style={{backgroundColor: backgroundColor}} className={`w-full flex ${classOverride}`}>
            {children}
        </div>

    )
}

export default Screen