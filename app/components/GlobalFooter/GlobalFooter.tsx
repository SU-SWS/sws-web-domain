import { cnb } from 'cnbuilder';
import React from 'react';
import { Container } from '../Container';
import * as styles from './GlobalFooter.styles';

type GlobalFooterProps = {
  className?: string;
};

export const GlobalFooter = ({ className }: GlobalFooterProps) => (
  <Container className={cnb(styles.root, className)}>
    <footer className="cc global-footer basefont-20 rs-py-1 text-white bg-black w-full">
      <div className="flex flex-col lg:flex-row" title="Common Stanford resources">
        <div className="text-center mt-5 mb-9">
          <a className="logo hocus:no-underline text-white hocus:text-white type-3" href="https://www.stanford.edu">Stanford<br/>University</a>
        </div>
        <div className="lg:pl-45 xl:pl-50 text-left sm:text-center lg:text-left grow">
          <nav aria-label="global footer menu" className="flex flex-row sm:flex-col justify-center sm:items-center lg:items-start mb-10">
            <ul className="list-unstyled mb-10 sm:mb-4 mr-19 sm:mr-0 p-0 text-15 md:text-17 2xl:text-18 flex flex-col sm:flex-row">
              <li className="sm:mxr-10 md:mr-20 lg:mr-27"><a href="https://www.stanford.edu" className="text-white no-underline hocus:underline hocus:text-white">Stanford Home<span className="sr-only">(link is external)</span></a></li>
              <li className="sm:mr-10 md:mr-20 lg:mr-27"><a href="https://visit.stanford.edu/plan/" className="text-white no-underline hocus:underline hocus:text-white">Maps &amp; Directions<span className="sr-only">(link is external)</span></a></li>
              <li className="sm:mr-10 md:mr-20 lg:mr-27"><a href="https://www.stanford.edu/search/" className="text-white no-underline hocus:underline hocus:text-white">Search Stanford<span className="sr-only">(link is external)</span></a></li>
              <li><a href="https://emergency.stanford.edu" className="text-white no-underline hocus:underline hocus:text-white">Emergency Info<span className="sr-only">(link is external)</span></a></li>
            </ul>
            <ul className="list-unstyled mb-10 sm:mb-0 ml-19 sm:ml-0 p-0 text-15 sm:text-14 md:text-15 xl:text-16 flex flex-col sm:flex-row sm:link-regular">
              <li className="sm:mr-10 md:mr-20 lg:mr-27"><a href="https://www.stanford.edu/site/terms/" title="Terms of use for sites" className="text-white no-underline hocus:underline hocus:text-white">Terms of Use<span className="sr-only">(link is external)</span></a></li>
              <li className="sm:mr-10 md:mr-20 lg:mr-27"><a href="https://www.stanford.edu/site/privacy/" title="Privacy and cookie policy" className="text-white no-underline hocus:underline hocus:text-white">Privacy<span className="sr-only">(link is external)</span></a></li>
              <li className="sm:mr-10 md:mr-20 lg:mr-27"><a href="https://uit.stanford.edu/security/copyright-infringement" title="Report alleged copyright infringement" className="text-white no-underline hocus:underline hocus:text-white">Copyright<span className="sr-only">(link is external)</span></a></li>
              <li className="sm:mr-10 md:mr-20 lg:mr-27"><a href="https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4" title="Ownership and use of Stanford trademarks and images" className="text-white no-underline hocus:underline hocus:text-white">Trademarks<span className="sr-only">(link is external)</span></a></li>
              <li className="sm:mr-10 md:mr-20 lg:mr-27"><a href="https://studentservices.stanford.edu/more-resources/student-policies/non-academic/non-discrimination" title="Non-discrimination policy" className="text-white no-underline hocus:underline hocus:text-white">Non-Discrimination<span className="sr-only">(link is external)</span></a></li>
              <li><a href="https://www.stanford.edu/site/accessibility" title="Report web accessibility issues" className="text-white no-underline hocus:underline hocus:text-white">Accessibility<span className="sr-only">(link is external)</span></a></li>
            </ul>
          </nav>
          <div className="text-13 sm:text-14 text-center lg:text-left">
            <span className="whitespace-no-wrap">© Stanford University.</span>
            <span className="whitespace-no-wrap">&nbsp; Stanford, California 94305.</span>
          </div>
        </div>
      </div>
    </footer>
    </Container>
  );

export default GlobalFooter;
