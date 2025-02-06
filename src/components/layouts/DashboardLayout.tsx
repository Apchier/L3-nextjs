import { DashboardContainer } from "./DashboardContainer"


type DashboardLayoutProps = {
    children: React.ReactNode
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
    children
}) => {
    return (
        <DashboardContainer>
            {children}
        </DashboardContainer>
    )
}