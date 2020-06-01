import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
import Dashboard from './pages/dashboard/Dashboard';
import Credits from './pages/credits/Credits';
import TaskEvaluation from './pages/task/evaluation/TaskEvaluation';
import Settings from './pages/settings/Settings';
import TaskList from './pages/task/list/TaskList';
import Lecture from './pages/task/lecture/Lecture';
import PageLayout from './templates/page/PageLayout';
import AddTask from './pages/task/add/AddTask';
import SubjectTask from './pages/task/subject/SubjectTask';
import ErrorPage from './pages/errorPage/ErrorPage';
import ValidateEmail from './pages/validateEmail/ValidateEmail';

class App extends Component {
    render() {
        return (
            <Router>
                <PageLayout>
                    <Switch>
                        <Route path={['/login', '/register', '/']} exact component={LandingPage} />
                        <Route path="/credits" exact component={Credits} />
                        <Route path="/dashboard" exact component={Dashboard} />
                        <Route path="/task/list" exact component={TaskList} />
                        <Route path="/task/result" exact component={TaskEvaluation} />
                        <Route path="/task/lecture" exact component={Lecture} />
                        <Route path="/task/add" exact component={AddTask} />
                        <Route path="/task/subject" exact component={SubjectTask} />
                        <Route path="/settings" exact component={Settings} />
                        <Route path="/register/validateemail/:token" exact component={ValidateEmail} />
                        <Route
                            path={['/imprint', '/privacy']}
                            exact
                            component={() => {
                                window.location.href = 'https://the-morpheus.de/faq.html';
                                return null;
                            }}
                        />
                        <Route path="/error404" exact component={ErrorPage} status={404} />
                        <Route path="*" status={404}>
                            <Redirect to="/error404" />
                        </Route>
                    </Switch>
                </PageLayout>
            </Router>
        );
    }
}

export default App;
