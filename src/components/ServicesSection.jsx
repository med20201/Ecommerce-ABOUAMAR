import { faCouch, faStar, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const ServicesSection = () => {
  return (
    <SectionWrapper className="py-4 my-5">
      <h1 className='text-center mb-5'>Our Services</h1>
      <ServiceContainer className="container">
        <div className="row">
          <ServiceItem className="col-md-4 mb-4">
            <ServiceIcon icon={faCouch} />
            <ServiceTitle>hhhhhhhhhh</ServiceTitle>
            <ServiceDescription>
              Explore a diverse collection of high-qualit.
            </ServiceDescription>
            
          </ServiceItem>

          <ServiceItem className="col-md-4 mb-4">
            <ServiceIcon icon={faTruck} />
            <ServiceTitle>Fast and Reliable Delivery</ServiceTitle>
            <ServiceDescription>
            </ServiceDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maxime incidunt non optio ratione esse obcaecati dicta quia ipsam saepe magni, distinctio laborum veritatis consectetur repellendus corporis? Omnis, velit. Nobis?
          </ServiceItem>

          <ServiceItem className="col-md-4 mb-4">
            <ServiceIcon icon={faStar} />
            <ServiceTitle>Premium Quality</ServiceTitle>
            <ServiceDescription>
              Clothes jjjjjjjjjjlskacmklwedjsvhfdjkx
            </ServiceDescription>
          </ServiceItem>
        </div>
      </ServiceContainer>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  padding: 80px 0;
  background-color: ${(props) => props.theme.bgColor};

`;

const ServiceContainer = styled.div`
  text-align: center;
`;

const ServiceItem = styled.div`
  text-align: center;
`;

const ServiceIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  color: ${(props) => props.theme.mainColor};
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: ${(props) => props.theme.headingColor};
`;

const ServiceDescription = styled.p`
  color: ${(props) => props.theme.textColor};
`;

export default ServicesSection;
