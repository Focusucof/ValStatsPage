import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';

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

    return (
        <section
            {...props}
            className={outerClasses}
        >

                <div className="container-sm">
                    <div className={innerClasses}>
                        <div className="hero-content">
                            <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
                                <div className="match-history row" style={{height: 100, width: "100%", marginBottom: '25px'}}>
                                    <img src=" " style={{height: 100, width: 100, marginLeft: '0%', display: 'flex', flex: 1}} className="column" alt=""/>
                                    <p className="match-score" style={{display: 'flex', flex: 1, transform: 'translate(40%, 100%)'}}>13-9</p>
                                    <p className="kda" style={{display: 'flex', flex: '1', transform: 'translate(80%, -50%)'}}>22/12/5</p>
                                    
                                    
                                </div>
                                <div className="match-history row" style={{height: 100, width: "100%", marginBottom: '25px'}}>
                                    <img src=" " style={{height: 100, width: 100, marginLeft: '0%', display: 'flex', flex: 1}} className="column" alt=""/>
                                    <p className="match-score" style={{display: 'flex', flex: 1, transform: 'translate(40%, 100%)'}}>13-9</p>
                                    <p className="kda" style={{display: 'flex', flex: '1', transform: 'translate(80%, -50%)'}}>22/12/5</p>
                                    
                                    
                                </div>
                                <div className="match-history row" style={{height: 100, width: "100%", marginBottom: '25px'}}>
                                    <img src=" " style={{height: 100, width: 100, marginLeft: '0%', display: 'flex', flex: 1}} className="column" alt=""/>
                                    <p className="match-score" style={{display: 'flex', flex: 1, transform: 'translate(40%, 100%)'}}>13-9</p>
                                    <p className="kda" style={{display: 'flex', flex: '1', transform: 'translate(80%, -50%)'}}>22/12/5</p>
                                    
                                    
                                </div>
                                <div className="match-history row" style={{height: 100, width: "100%", marginBottom: '25px'}}>
                                    <img src=" " style={{height: 100, width: 100, marginLeft: '0%', display: 'flex', flex: 1}} className="column" alt=""/>
                                    <p className="match-score" style={{display: 'flex', flex: 1, transform: 'translate(40%, 100%)'}}>13-9</p>
                                    <p className="kda" style={{display: 'flex', flex: '1', transform: 'translate(80%, -50%)'}}>22/12/5</p>
                                    
                                    
                                </div>
                                <div className="match-history row" style={{height: 100, width: "100%", marginBottom: '25px'}}>
                                    <img src=" " style={{height: 100, width: 100, marginLeft: '0%', display: 'flex', flex: 1}} className="column" alt=""/>
                                    <p className="match-score" style={{display: 'flex', flex: 1, transform: 'translate(40%, 100%)'}}>13-9</p>
                                    <p className="kda" style={{display: 'flex', flex: '1', transform: 'translate(80%, -50%)'}}>22/12/5</p>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </section>
    );

}

export default MatchHistory;
