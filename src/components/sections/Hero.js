import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
//import Image from '../elements/Image';
//import Modal from '../elements/Modal';

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

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Focus <span className="text-color-primary">#8047</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://cruip.com/">
                    Get started
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/cruip/open-react-template/">
                    View on Github
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <div className="match-history row" style={{height: 100, width: "100%", marginBottom: '25px'}}>
				<img src="https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayiconsmall.png" style={{height: 100, width: 100, marginLeft: '0%', display: 'flex', flex: 1}} className="column" alt=""/>
				<p className="match-score" style={{display: 'flex', flex: 1, transform: 'translate(40%, 100%)'}}>13-9</p>
				<p className="kda" style={{display: 'flex', flex: '1', transform: 'translate(80%, -50%)'}}>22/12/5</p>
				
				
            </div>
			<div className="match-history row" style={{height: 100, width: "100%", marginBottom: '25px'}}>
				<img src="https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayiconsmall.png" style={{height: 100, width: 100, marginLeft: '0%', display: 'flex', flex: 1}} className="column" alt=""/>
				<p className="match-score" style={{display: 'flex', flex: 1, transform: 'translate(40%, 100%)'}}>13-9</p>
				<p className="kda" style={{display: 'flex', flex: '1', transform: 'translate(80%, -50%)'}}>22/12/5</p>
				
				
            </div>
			<div className="match-history row" style={{height: 100, width: "100%", marginBottom: '25px'}}>
				<img src="https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayiconsmall.png" style={{height: 100, width: 100, marginLeft: '0%', display: 'flex', flex: 1}} className="column" alt=""/>
				<p className="match-score" style={{display: 'flex', flex: 1, transform: 'translate(40%, 100%)'}}>13-9</p>
				<p className="kda" style={{display: 'flex', flex: '1', transform: 'translate(80%, -50%)'}}>22/12/5</p>
				
				
            </div>
			<div className="match-history row" style={{height: 100, width: "100%", marginBottom: '25px'}}>
				<img src="https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayiconsmall.png" style={{height: 100, width: 100, marginLeft: '0%', display: 'flex', flex: 1}} className="column" alt=""/>
				<p className="match-score" style={{display: 'flex', flex: 1, transform: 'translate(40%, 100%)'}}>13-9</p>
				<p className="kda" style={{display: 'flex', flex: '1', transform: 'translate(80%, -50%)'}}>22/12/5</p>
				
				
            </div>
			<div className="match-history row" style={{height: 100, width: "100%", marginBottom: '25px'}}>
				<img src="https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayiconsmall.png" style={{height: 100, width: 100, marginLeft: '0%', display: 'flex', flex: 1}} className="column" alt=""/>
				<p className="match-score" style={{display: 'flex', flex: 1, transform: 'translate(40%, 100%)'}}>13-9</p>
				<p className="kda" style={{display: 'flex', flex: '1', transform: 'translate(80%, -50%)'}}>22/12/5</p>
				
				
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