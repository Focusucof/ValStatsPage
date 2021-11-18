import React from 'react';
import classNames from 'classnames';
import { GitHub, Twitter, Twitch } from 'react-feather';

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://github.com/Focusucof" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/_Focusucof" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
        </li>
        <li>
          <a href="https://www.twitch.tv/firstfocus" target="_blank" rel="noopener noreferrer">
            <Twitch />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;