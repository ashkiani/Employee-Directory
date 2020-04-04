import React from 'react'

export default function Search() {
    return (
        <div className="row">
            <div className="col-lg-4 col-md-3 col-sm-0">

            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="input-group my-3">
                    <input type="text" className="form-control" placeholder="Search By Employee Name" id="searchText" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" id="searchBtn"><i
                            className="fa fa-search"></i></button>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-3 col-sm-0">

            </div>
        </div>

    )
}
