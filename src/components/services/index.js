import React from "react";
import Icon1 from '../../images/svg_1.svg';
import Icon2 from "../../images/undraw_savings_re_eq4w.svg";
import Icon3 from "../../images/undraw_community_re_cyrm.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServiceWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./serviceElements";
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServiceWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce Expences</ServicesH2>
          <ServicesP>
            We help you reduce your fees and increase your overall revenue
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>You can access our Platform Anywhere</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            Unlock our special membership card that returns 5% cash back.
          </ServicesP>
        </ServicesCard>
      </ServiceWrapper>
    </ServicesContainer>
  );
};

export default Services;
