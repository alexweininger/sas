const WhatCanIDo = () => {
    return (
        <section id="whatcanido" className="features-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="section-title text-center pb-10">
                            <h3 className="title">What can I do?</h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-7 col-sm-9">
                        <div className="single-features mt-40">
                            <div className="features-title-icon d-flex justify-content-between">
                                <h4 className="features-title"><a href="#create">Create a new space</a></h4>
                            </div>
                            <div className="features-content">
                                <p className="text">
                                    Use the portal to create a new object storage space to safe-guard files related to your project in the cloud.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-7 col-sm-9">
                        <div className="single-features mt-40">
                            <div className="features-title-icon d-flex justify-content-between">
                                <h4 className="features-title"><a href="#share">Share files with others</a></h4>
                            </div>
                            <div className="features-content">
                                <p className="text">
                                    Share files and folders of interest with members our groups within the institution with couple clicks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-7 col-sm-9">
                        <div className="single-features mt-40">
                            <div className="features-title-icon d-flex justify-content-between">
                                <h4 className="features-title"><a href="#manage">Manage access to files</a></h4>
                            </div>
                            <div className="features-content">
                                <p className="text">
                                    As you share access to files and folders, you might need to have the ability to ajust permissions. We let you do so.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-7 col-sm-9">
                        <div className="single-features mt-40">
                            <div className="features-title-icon d-flex justify-content-between">
                                <h4 className="features-title"><a href="#cost">Cost, space and more</a></h4>
                            </div>
                            <div className="features-content">
                                <p className="text">
                                    Keep tracking of all your spaces, including data cost, total files, total storage occupied and available, and more.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-7 col-sm-9">
                        <div className="single-features mt-40">
                            <div className="features-title-icon d-flex justify-content-between">
                                <h4 className="features-title"><a href="#policies">Automatic policies</a></h4>
                            </div>
                            <div className="features-content">
                                <p className="text">
                                    Benefit from having unused files being shifted automatically between hot, cool and archive layers.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-7 col-sm-9">
                        <div className="single-features mt-40">
                            <div className="features-title-icon d-flex justify-content-between">
                                <h4 className="features-title"><a href="#connect">How to connect directly</a></h4>
                            </div>
                            <div className="features-content">
                                <p className="text">
                                    See detailed information about how to connect directly to your spaces via <a href="https://docs.microsoft.com/en-us/cli/azure/install-azure-cli" target="_blank" rel="noreferrer">Azure CLI</a> and <a href="https://azure.microsoft.com/en-us/features/storage-explorer/" target="_blank" rel="noreferrer">Storage Explorer</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatCanIDo
