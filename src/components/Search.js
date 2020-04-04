import React from 'react'

export default function Search() {
    return (
        <div class="row">
            <div class="col-lg-4 col-md-3 col-sm-0">

            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="input-group my-3">
                    <input type="text" class="form-control" placeholder="Search By Employee Name" id="searchText" />
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button" id="searchBtn"><i
                            class="fa fa-search"></i></button>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-3 col-sm-0">

            </div>
        </div>

    )
}
