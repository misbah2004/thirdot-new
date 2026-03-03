import React from 'react'

const PortfolioHeader = () => {
    return (
        <>
            <div>
                <div className="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* Page Header Box Start */}
                                <div className="page-header-box">
                                    <h1 className="text-anime-style-3">Portfolio</h1>
                                    <nav className="wow fadeInUp" data-wow-delay="0.25s">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a href="#">home</a>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                portfolio
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                                {/* Page Header Box End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioHeader