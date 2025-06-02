import GridContainer from "../Components/defaults/GridContainer";
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
                <div className="col-span-10">{children}</div>
            </GridContainer>
        </div>
    );
}
