import GridContainer from "../Components/defaults/GridContainer";
import MaxWidthWrapper from "../Components/defaults/MaxWidthWrapper";
import NavBar from "../Components/Nav/NavBar";
import SideBar from "../Components/Nav/SideBar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg grid h-screen ">
            <GridContainer cols={12}>
                <SideBar />
                <MaxWidthWrapper className="col-span-10">
                    <NavBar />
                    {children}
                </MaxWidthWrapper>
            </GridContainer>
        </div>
    );
}
