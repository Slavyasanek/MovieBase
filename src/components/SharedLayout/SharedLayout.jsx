import { Container, Main } from "components/Container/Container.styled"
import { Header } from "components/Header/Header";
import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
    return (
        <>
            <Header />
            <Main>
                <Container>
                    <Suspense fallback={<Loader/>}>
                        <Outlet />
                    </Suspense>
                </Container>
            </Main>
        </>
    )
}