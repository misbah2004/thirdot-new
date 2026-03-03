import React from 'react'
import PortfolioHeader from '../../components/portfolio/portfolio-header'
import OurPortfolio from '../../components/portfolio/our-portfolio'

const Portfolio = () => {
    return (
        <>
            <div>
                <>
                    {/* Page Header Start */}
                    <PortfolioHeader />
                    {/* Page Header End */}
                    {/* Projects Page Start */}
                    <OurPortfolio />
                    {/* Projects Page End */}
                </>

            </div>
        </>
    )
}

export default Portfolio