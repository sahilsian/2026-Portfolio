import Screen from "@/components/screen";
import Typography from "@/components/typography";

const FourOFour = () => {
    return (
        <Screen classOverride={"h-screen"}>
            <div className={"w-full flex justify-center items-center"}>
                <Typography level={'2'} value={"This page is currently in construction!"}></Typography>
            </div>
        </Screen>
    )
}

export default FourOFour