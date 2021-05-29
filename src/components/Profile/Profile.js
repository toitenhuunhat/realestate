import React, { Component } from 'react';
import callAPI from '../../utils/callAPI';
import axios from "axios"
import { getProfile } from '../../constans/getAPI';
import callApiAu from '../../utils/callApiAu'
import { Link, Route } from 'react-router-dom'
import ChangePass from './ChangePass';

class Profile extends Component {
    state = {
        full_name: '',
        email: '',
        phone: '',
        sex: '',
    }

    componentDidMount() {
        const token = sessionStorage.getItem('token');
        callApiAu('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/tenant_api/profile.php', 'GET', token, null)
            .then(res => {
                this.setState({
                    full_name: res.data.full_name,
                    email: res.data.email,
                    phone: res.data.phone_no,
                    sex: res.data.sex
                })
            })
    }

    componentDidUpdate(prevState) {
        const token = sessionStorage.getItem('token');
        if (prevState) {
            callApiAu('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/tenant_api/profile.php', 'GET', token, null)
            .then(res => {
                this.setState({
                    full_name: res.data.full_name,
                    email: res.data.email,
                    phone: res.data.phone_no,
                    sex: res.data.sex
                })
            })  
        }
    }

    editDatas = () => {
        this.props.editDatas(this.state)
    }

    onClickForm = () => {
        this.editDatas()
        this.props.onOpenForm()
    }

    render() {
        const { full_name, email, phone, sex } = this.state;
        console.log(phone);
        return (
            <div className="man-profile" >
                <div className="row text-center">
                    <div className="col-sm-12">
                        <img src="/images/anh_user.png" width="40%" alt="anh user" />
                    </div>
                </div>
                <form className="mt-40">
                    <div className="form-group bd-b">
                        <div className="row">
                            <div className="col-sm-3">
                            </div>
                            <div className="col-sm-2">
                                <label>NAME</label>
                            </div>
                            <div className="col-sm-2">
                            </div>
                            <div className="col-sm-5 text-left">
                                <h5>
                                    {full_name}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="form-group bd-b">
                        <div className="row">
                            <div className="col-sm-3">
                            </div>
                            <div className="col-sm-2">
                                <label>EMAIL</label>
                            </div>
                            <div className="col-sm-2">
                            </div>
                            <div className="col-sm-5 text-left">
                                <h5>
                                    {email}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="form-group bd-b">
                        <div className="row">
                            <div className="col-sm-3">
                            </div>
                            <div className="col-sm-2">
                                <label>PHONE</label>
                            </div>
                            <div className="col-sm-2">
                            </div>
                            <div className="col-sm-5 text-left">
                                <h5>
                                    {phone}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="form-group bd-b">
                        <div className="row">
                            <div className="col-sm-3">
                            </div>
                            <div className="col-sm-2">
                                <label>GENDER</label>
                            </div>
                            <div className="col-sm-2">
                            </div>
                            <div className="col-sm-5 text-left">
                                <h5>
                                    {sex}
                                </h5>
                            </div>
                        </div>
                    </div>
                </form>
                <br />
                <div className="form-group bd-b">
                    <div className="row">
                        <div className="col-sm-3">
                        </div>
                        <div className="col-sm-2">
                            <button
                                className="btn-profile btn-edit-profile"
                                onClick={this.onClickForm}
                            >Sửa</button>
                        </div>
                        <div className="col-sm-2">
                        </div>
                        <div className="col-sm-5 text-left">
                            <Link to="/changePass">
                                <button className="btn-profile btn-change-pass">Đổi mật khẩu</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;