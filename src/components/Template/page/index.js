import React, {Component} from 'react';
import './index.scss';
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";
import {withRouter} from 'react-router-dom';

class PageLayout extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        visible: false
    };

    hiddenSidebarPages = ['/', '/credits', '/imprint', '/privacy'];

    renderSitebar() {
        const route = this.props.location.pathname;
        /*this.setState(() => {
            return {visible: true};
        });*/
        return this.hiddenSidebarPages.includes(route);
    }

    gridLayout() {
        if (this.renderSitebar()) {
            return "'header header' 'content content' 'footer footer'";
        }
        return "'header header' 'sidebar content'";
    }

    render() {
        return (
            <div id="pageLayout" style={{gridTemplateAreas: this.gridLayout()}}>
                <Header side={!this.renderSitebar() ? 'Dashboard' : 'Landing'}/>
                <Sidebar active="PAGE-ROUTE" visible={this.renderSitebar()}/>
                <div id="layoutContainer">
                    {this.props.children}
                </div>
          {/*      {
                    this.state.visible && <Footer/>
                }*/}
                <Footer visible={!this.renderSitebar()}/>
            </div>);
    }
}

export default withRouter(PageLayout);
