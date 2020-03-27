import React, { Component } from "react";
import "./index.scss";
import { Route, Redirect } from "react-router-dom";
import Login from "../../components/Login";
import Register from "../../components/Register";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Landing_Image from "../../assets/Picture/landingpage-teaching.svg";
import Modal from "react-animated-modal";

class Landing extends Component {
    state = { showModal: false, redirect: false };

    render() {
        return (
            <div className="landing">
                <Header side="Landing" />
                <div className="Main">
                    {(() => {
                        if (this.state.redirect) {
                            this.setState({ redirect: false });

                            return <Redirect exact to={this.state.redirect} />;
                        }
                    })()}

                    {/*TODO Route zurück auf /login /register*/}
                    <Route
                        exact
                        path={["/dashboard", "/dashboard"]}
                        render={() => {
                            if (!this.state.showModal && !this.state.redirect) {
                                this.setState({ showModal: true });
                            }
                        }}
                    />

                    <Modal
                        visible={this.state.showModal}
                        closemodal={() => {
                            console.log("close modal");
                            this.setState({ showModal: false, redirect: "/" });
                        }}
                        type="fadeIn"
                    >
                    {/*TODO Route zurück auf /login /register*/}
                        <Route exact path="/dashboard" component={Login} />
                        <Route exact path="/dashboard" component={Register} />
                    </Modal>

                    <div id="content">
                        <div id="image-landigpage">
                            <img
                                id="landigpage-img"
                                src={Landing_Image}
                                alt="landigpage-teaching image"
                            />
                        </div>
                        <div id="text-content">
                            <h2>Education for everyone</h2>
                            <h4>
                                E-Edu ist eine Lernplattform die im Rahmen des
                                Hackathon <span>#WirVsVirus</span> vom Team "The Morpheus
                                Tutorials" erstellt wurde.
                                <br />
                                E-Edu bietet eine Lernplattform für Schüler die
                                von Lehrern erstellte Aufgaben bearbeiten können
                            </h4>
                            {/*	<h3>E-Edu bietet eine Lernplattform für Schüler die von Lehrern erstellte Aufgaben bearbeiten können und danach entscheiden ob sie die aufgaben gut fanden.*/}
                            {/*		Lehrer haben die Möglichkeit die von ihnen erstellte Aufgaben zu kontrollieren und können sehen wie die Schüler ihre Aufgaben abgestimmt haben.</h3>*/}
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }

}

export default Landing;
