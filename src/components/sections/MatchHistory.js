import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';

const MatchHistory = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);


    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'hero-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    useEffect(() => {
        axios.get('http://localhost:1337/').then(async (res) => {
            await axios.get('http://localhost:1337/match-history').then(response => {
                setMatches(response.data);
                setLoading(false);
                console.log(response.data);
            })
        });            
    }, []);

    return (
        <section
            {...props}
            className={outerClasses}
            
        >

                <div className="container-sm">
                    <div className={innerClasses}>
                        <div className="hero-content">
                            <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="200">
                                <div className="match-history row" style={{height: 100, width: "100%", marginBottom: '25px'}}>
                                    {loading ? "" : <img src={"https://media.valorant-api.com/agents/" + matches[0].agent + "/displayiconsmall.png"} style={{height: 100, width: 100, marginLeft: '0%', display: 'flex', flex: 1}} className="column" alt=""/>}
                                    {/*<img src={"https://media.valorant-api.com/agents/" + loading ? "" : matches[0].agent + "/displayiconsmall.png"} style={{height: 100, width: 100, marginLeft: '0%', display: 'flex', flex: 1}} className="column" alt=""/>*/}
                                    <h3 className="match-score" style={{}}>{loading ? "Loading" : JSON.stringify(matches[0].teamScore) + "-" + JSON.stringify(matches[0].enemyScore)} </h3>
                                    <p className="kda" style={{}}>22/12/5</p>
                                    
                                    
                                </div>
                                <div className="match-history row" style={{height: 100, width: "100%", marginBottom: '25px'}}>
                                    <img src=" " style={{height: 100, width: 100, marginLeft: '0%', display: 'flex', flex: 1}} className="column" alt=""/>
                                    <h3 className="match-score" style={{}}>13-9</h3>
                                    <p className="kda" style={{}}>22/12/5</p>
                                    
                                    
                                </div>
                                <div className="match-history row" style={{height: 100, width: "100%", marginBottom: '25px'}}>
                                    <img src=" " style={{height: 100, width: 100, marginLeft: '0%', display: 'flex', flex: 1}} className="column" alt=""/>
                                    <h3 className="match-score" style={{}}>13-9</h3>
                                    <p className="kda" style={{}}>22/12/5</p>
                                    
                                    
                                </div>
                                <div className="match-history row" style={{height: 100, width: "100%", marginBottom: '25px'}}>
                                    <img src=" " style={{height: 100, width: 100, marginLeft: '0%', display: 'flex', flex: 1}} className="column" alt=""/>
                                    <h3 className="match-score" style={{}}>13-9</h3>
                                    <p className="kda" style={{}}>22/12/5</p>
                                    
                                    
                                </div>
                                <div className="match-history row" style={{height: 100, width: "100%", marginBottom: '25px'}}>
                                    <img src=" " style={{height: 100, width: 100, marginLeft: '0%', display: 'flex', flex: 1}} className="column" alt=""/>
                                    <h3 className="match-score" style={{}}>13-9</h3>
                                    <p className="kda" style={{}}>22/12/5</p>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </section>
    );

}

export default MatchHistory;
