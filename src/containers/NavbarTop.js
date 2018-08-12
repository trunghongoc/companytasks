import React, { Component } from 'react'
import { Button, Popover, Icon, Badge } from 'antd'
import { Link } from 'react-router-dom'
import * as Constants from './../constants/var'

import { connect } from 'react-redux'

function mapStateToProps(state: Object): Object {
    return {
      windowSize: state.windowSize
    }
}

function mapDispatchToProps(dispatch: Function): Object {
  return {
  }
}

class NavbarTop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                name: 'Trung Hồ Ngọc',
                userName: 'trunghongoc',
                dropdownLinks: [
                    {
                        icon: 'contacts',
                        text: 'Hồ sơ',
                        href: '/user/profile'
                    },
                    {
                        icon: 'book',
                        text: 'Dự án',
                        href: '/user/projects'
                    },
                    {
                        icon: 'table',
                        text: 'Thẻ',
                        href: '/user/cards',
                    },
                    {
                        icon: 'info-circle-o',
                        text: 'Trợ giúp',
                        href: '/helps',
                    }
                ]
            },
            visibleMenuUser: false,
            showMobileMenu: false
        }

        this.userTitle = this.userTitle.bind(this)
        this.userMenu = this.userMenu.bind(this)
        this.changeLanguage = this.changeLanguage.bind(this)
        this.logout = this.logout.bind(this)
        this.showMenuUser = this.showMenuUser.bind(this)
        this.menuRightAndMobile = this.menuRightAndMobile.bind(this)
        this.isSm = this.isSm.bind(this)
        this.showMenuMobileFunc = this.showMenuMobileFunc.bind(this)
    }

    changeLanguage() {
        alert('change lang')
    }

    logout() {
        alert('logout')
    }

    userTitle() {
        let user = this.state.user
        return user.name + ' (' + user.userName + ')'
    }

    userMenu() {
        let user = this.state.user
        return (
            <ul className="popover-item-t">
                {
                    user.dropdownLinks.map((item, index) => {
                        return <li key={index} onClick={ () => this.showMenuUser(false) }>
                            <Link to={item.href}>
                                <Icon type={item.icon} />
                                { item.text }
                            </Link>
                        </li>
                    })
                }
                <hr/>
                <li onClick={this.changeLanguage}>
                    <span>
                        <Icon type="sync" />
                        Thay đổi ngôn ngữ
                    </span>
                </li>

                <li onClick={this.logout}>
                    <span>
                        <Icon type="logout" />
                        Đăng xuất
                    </span>
                </li>
            </ul>
        )
    }

    showMenuUser(visible: Boolean) {
        this.setState({visibleMenuUser: visible})
    }

    showMenuMobileFunc(visible: Boolean) {
        this.setState({showMobileMenu: visible})
    }

    menuRightAndMobile() {
        let { visibleMenuUser, showMobileMenu } = this.state
        return (
            <div>
                <div className={ "left-menu-mobile " + ( showMobileMenu && this.isSm() ? "float-left" : "")}>
                    <Button type="primary" shape="circle" icon="plus" />
                    <Button type="primary" shape="circle" icon="info" />

                    <Button type="primary" shape="circle">
                        <Badge status="warning">
                            <Icon type="bell" />
                        </Badge>
                    </Button>
                    <Popover placement="bottomRight" visible={visibleMenuUser} onVisibleChange={this.showMenuUser} title={this.userTitle()} content={this.userMenu()} trigger="click">
                        <Button type="primary" shape="circle" icon="user" />
                    </Popover>
                </div>
                <div className="right-menu-mobile text-right float-right">
                    <Button className={ !showMobileMenu || !this.isSm() ? 'hide-div' : '' } onClick={() => this.showMenuMobileFunc(false)} type="primary" shape="circle" icon="up" />
                </div>
                <div className="clearfix"></div>
            </div>
        )
    }

    isSm() {
        return this.props.windowSize.width < Constants.mdScreenSize
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.windowSize.width < Constants.mdScreenSize && prevState.visibleMenuUser && !prevState.showMobileMenu) {
            return { visibleMenuUser: false }
        }
        return null
    }

    render() {
        let isSm = this.isSm()
        let { showMobileMenu } = this.state

        return(
            <div className="navbar-t">
                {
                    isSm &&
                    <div className={"fixed-menu-mobile " + (showMobileMenu ? 'active-mobile-t' : '')}>
                        <div className="display-menu-mobile-t">
                            { this.menuRightAndMobile() }
                        </div>
                    </div>
                }

                <div className="wrap">
                    <div className="row">
                        <div className="col col-sm-9 col-md-5 align-self-start btn-left">
                            <Link to="/user/cards">
                                <Button type="primary" icon="profile">Bảng</Button>
                            </Link>
                            <Link to="/messages">
                                <Button type="primary" shape="circle" icon="message" />
                            </Link>
                        </div>
                        <div className="col col-md-2 text-center logo d-none d-md-block">
                            <Link to="/">
                                <img src="./../images/logo.png" alt=""/>
                            </Link>
                        </div>
                        <div className="col col-sm-3 col-md-5 align-self-end">
                            <div className="text-right btn-right">
                                <div className={ isSm ? 'hide-div' : '' }>
                                    { !isSm ? this.menuRightAndMobile() : '' }
                                </div>

                                <Button className={ !isSm ? 'hide-div' : '' } onClick={() => this.showMenuMobileFunc(true)} type="primary" shape="circle" icon="down" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarTop)
