import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import axios from 'axios';
import FadeIn from 'react-fade-in';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(true);

/*   const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }    */

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
			await axios.get('http://localhost:1337/rank-info').then(response => {
				setInfo(response.data);
				setLoading(false);
			});
		});
	}, []);

  return (
    <section
      {...props}
      className={outerClasses}
      style={{height: '100vh'}}
    >
      <div className="container-sm" style={{position: 'relative', top: '25%'}}>
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Focus <span className="text-color-primary">#8047</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style={{fontSize: '36px'}}>
                {/* {loading ? "" : <span style={{color: '#E95678'}}>{info.rank}</span>}
				{loading ? "" : <span> #{info.leaderboardPlace}</span>} */}
				{loading ? "" : <FadeIn><span style={{color: '#E95678'}}>{info.rank}</span></FadeIn>}
				{loading ? "" : <div style={{paddingTop: '10px'}}><FadeIn><span> {"#" + info.leaderboardPlace} </span></FadeIn></div>}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;