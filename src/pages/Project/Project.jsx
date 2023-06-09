import { useParams } from "react-router-dom";
import projects from "../../data/projects";
import styled from "styled-components";
import Snapshots from "./Snapshots";
const Project = () => {
  const { id } = useParams();

  const project = projects.find((item) => item.id === +id);

  return (
    <div>
      <div>
        <Image src={project.image} alt={project.title} />
      </div>
      <Title>{project.title}</Title>
      <TechContainer>
        <span>Tech: </span>
        <p>{project.tools.join(", ")}</p>
      </TechContainer>
      <LinkContainer>
        <a rel="noreferrer" target="_blank" href={project.live}>
          Live Website
        </a>
        <a rel="noreferrer" target="_blank" href={project.client}>
          Client Side
        </a>
        {project?.server && (
          <a rel="noreferrer" target="_blank" href={project.server}>
            Server Side
          </a>
        )}
      </LinkContainer>

      <Disc>{project.disc}</Disc>

      <FeatureContainre>
        <h2>Features</h2>
        <ul>
          {project?.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </FeatureContainre>
      <Snapshots snapshots={project?.images} />
    </div>
  );
};

const Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 6px;
  margin-block: 32px;
`;

const Title = styled.h1`
  margin-bottom: 4px;
  font-weight: 500;
`;

const TechContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    font-weight: 600;
  }

  p {
    margin-top: 3px;
    font-size: 0.9rem;
    word-wrap: normal;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
  margin-top: 8px;
  font-weight: 600;

  a {
    text-decoration: underline;
  }

  a:nth-child(1) {
    color: #00b050;
  }
  a:nth-child(2) {
    color: #0070c0;
  }
  a:nth-child(3) {
    color: #f03c3c;
  }
`;

const Disc = styled.p`
  margin-block: 20px;
`;

const FeatureContainre = styled.section`
  h2 {
    margin-block: 18px;
  }
  li {
    font-size: 1.25rem;
    margin-left: 20px;
    line-height: 1.3;
    margin-bottom: 8px;
  }
  margin-bottom: 20px;
`;

export default Project;
