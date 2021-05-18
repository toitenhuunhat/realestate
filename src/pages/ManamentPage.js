import React, { Component } from 'react'
import Banner from "../components/Banner";
import List from "../components/Manament/List"

class ManamentPage extends Component {
    render() {
        const pageName = 'Quản lý tin'
        return (
            <>
                <Banner pageName={pageName} />

                <div class="container mt-10 mb-40">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <List />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ManamentPage;