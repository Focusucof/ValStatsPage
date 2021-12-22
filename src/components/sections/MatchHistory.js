import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import FadeIn from 'react-fade-in';

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
        axios.get('https://api.dev1n.tech/').then(async (res) => {
            await axios.get('https://api.dev1n.tech/match-history').then(response => {
                setMatches(response.data);
                setLoading(false);
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
                                    {loading ? "" : <FadeIn delay='150'><img src={"https://media.valorant-api.com/agents/" + matches[0].agent + "/displayiconsmall.png"} style={{height: 100, width: 100, marginLeft: '0%', display: 'flex', flex: 1}} className="column" alt=""/></FadeIn>}
                                    <h3 className="match-score" style={{}}>{loading ? "Loading" : <FadeIn delay='100'>{JSON.stringify(matches[0].teamScore) + "-" + JSON.stringify(matches[0].enemyScore)}</FadeIn>} </h3>
                                    <p className="kda" style={{}}>{loading ? "" : <FadeIn delay='200'>{JSON.stringify(matches[0].kills) + "/" + JSON.stringify(matches[0].deaths) + "/" + JSON.stringify(matches[0].assists)}</FadeIn>}</p>
                                    
                                    
                                </div>
                                <div className="match-history row" style={{height: 100, width: "100%", marginBottom: '25px'}}>
                                    {loading ? "" : <FadeIn delay='150'><img src={"https://media.valorant-api.com/agents/" + matches[1].agent + "/displayiconsmall.png"} style={{height: 100, width: 100, marginLeft: '0%', display: 'flex', flex: 1}} className="column" alt=""/></FadeIn>}
                                    <h3 className="match-score" style={{}}>{loading ? "Loading" : <FadeIn delay='100'>{JSON.stringify(matches[1].teamScore) + "-" + JSON.stringify(matches[1].enemyScore)}</FadeIn>} </h3>
                                    <p className="kda" style={{}}>{loading ? "" : <FadeIn delay='200'>{JSON.stringify(matches[1].kills) + "/" + JSON.stringify(matches[1].deaths) + "/" + JSON.stringify(matches[1].assists)}</FadeIn>}</p>
                                    
                                    
                                </div>
                                <div className="match-history row" style={{height: 100, width: "100%", marginBottom: '25px'}}>
                                    {loading ? "" : <FadeIn delay='150'><img src={"https://media.valorant-api.com/agents/" + matches[2].agent + "/displayiconsmall.png"} style={{height: 100, width: 100, marginLeft: '0%', display: 'flex', flex: 1}} className="column" alt=""/></FadeIn>}
                                    <h3 className="match-score" style={{}}>{loading ? "Loading" : <FadeIn delay='100'>{JSON.stringify(matches[2].teamScore) + "-" + JSON.stringify(matches[2].enemyScore)}</FadeIn>} </h3>
                                    <p className="kda" style={{}}>{loading ? "" : <FadeIn delay='200'>{JSON.stringify(matches[2].kills) + "/" + JSON.stringify(matches[2].deaths) + "/" + JSON.stringify(matches[2].assists)}</FadeIn>}</p>
                                    
                                    
                                </div>
                                <div className="match-history row" style={{height: 100, width: "100%", marginBottom: '25px'}}>
                                    {loading ? "" : <FadeIn delay='150'><img src={"https://media.valorant-api.com/agents/" + matches[3].agent + "/displayiconsmall.png"} style={{height: 100, width: 100, marginLeft: '0%', display: 'flex', flex: 1}} className="column" alt=""/></FadeIn>}
                                    <h3 className="match-score" style={{}}>{loading ? "Loading" : <FadeIn delay='100'>{JSON.stringify(matches[3].teamScore) + "-" + JSON.stringify(matches[3].enemyScore)}</FadeIn>} </h3>
                                    <p className="kda" style={{}}>{loading ? "" : <FadeIn delay='200'>{JSON.stringify(matches[3].kills) + "/" + JSON.stringify(matches[3].deaths) + "/" + JSON.stringify(matches[3].assists)}</FadeIn>}</p>
                                    
                                    
                                </div>
                                <div className="match-history row" style={{height: 100, width: "100%", marginBottom: '25px'}}>
                                    {loading ? "" : <FadeIn delay='150'><img src={"https://media.valorant-api.com/agents/" + matches[4].agent + "/displayiconsmall.png"} style={{height: 100, width: 100, marginLeft: '0%', display: 'flex', flex: 1}} className="column" alt=""/></FadeIn>}
                                    <h3 className="match-score" style={{}}>{loading ? "Loading" : <FadeIn delay='100'>{JSON.stringify(matches[4].teamScore) + "-" + JSON.stringify(matches[4].enemyScore)}</FadeIn>} </h3>
                                    <p className="kda" style={{}}>{loading ? "" : <FadeIn delay='200'>{JSON.stringify(matches[4].kills) + "/" + JSON.stringify(matches[4].deaths) + "/" + JSON.stringify(matches[4].assists)}</FadeIn>}</p>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </section>
    );

}

export default MatchHistory;
