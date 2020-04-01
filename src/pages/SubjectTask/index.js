import React from 'react';
import './index.scss';
import Header from '../../components/Header';
import ResultQuestion from '../../components/ResultQuestion';
import User from '../../assets/icons/user.svg';
import Users from '../../assets/icons/users.svg';


class Result extends React.Component {
    constructor(props) {
        super(props);
    }


    results = ['#BA1919', '#19BA3f', '#687D9A', '#687D9A', '#19BA3f'];

    render() {
        return (
            <div className='result'>
                <Header side='Dashboard'/>
                <div className='resultContainer'>
                    <div className='resultContentHeader'>
                        <div className='resultLeft'>
                            <span className='resultSubject'>
                                Mathe
                            </span>
                            <span className='resultModule'>
                                Plus
                            </span>
                        </div>
                        <div className='resultRight'>
                            <div className='resultPoints'>
                                <img src={User} alt=""/>
                                <p><span> 213</span> Punkte</p>
                            </div>
                            <div className='resultPoints'>
                                <img src={Users} alt=""/>
                                <p><span> 21.323</span> Punkte</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='progressDisplay'>
                    <span>Frage 4 von 10 </span>
                    <div className='progressBar'>
                        <div className='progressPer' per='90'></div>

                    </div>
                    <div className='subjectTaskTitel'>
                        <span>Äpfel und Birnen</span>

                    </div>
                    <div className='subjectDescription'>
                        <span>
                            Peter hat 3 Äpfel und 4 Birnen. Er gibt Lena 2 Äpfel und 1 Birne ab. Wieviele Äpfel hat Peter noch?
                        </span>
                    </div>

                </div>




            </div>
        );
    }
}

export default Result;
