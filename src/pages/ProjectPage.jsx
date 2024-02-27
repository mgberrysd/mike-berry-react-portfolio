// Bringing in the required component from 'react-router-dom' for linking between pages and getting the current param variable's value from URL
import Container from '../components/UI/ListItem';


export default function ProjectPage() {

  return (
    <main >
      <div>
      <Container projectTitle='The Prep Project' projectGithubLink='https://github.com/3123MtOlympus/theprepproject' projectLink='https://3123mtolympus.github.io/theprepproject/' projectImage='../src/assets/images/the-prep-project.png'>
      </Container>
      <Container projectTitle='Breaking Bread' projectGithubLink='https://github.com/falafelrapper/breaking-bread' projectLink='https://agile-cove-66310-81bc545fcfa7.herokuapp.com/' projectImage='../src/assets/images/breaking-bread.png'>
      </Container>
      <Container projectTitle='Coming Soon!'>
      </Container>
      <Container projectTitle='Coming Soon!'>
      </Container>
      </div>
    </main>
  );
}
