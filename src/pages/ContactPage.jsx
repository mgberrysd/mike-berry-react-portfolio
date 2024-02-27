// Bringing in the required component from 'react-router-dom' for linking between pages and getting the current param variable's value from URL
import { Link } from 'react-router-dom';

export default function ContactPage() {

  return (
    <main>
      <div className='container text-center card'>
        <h2>Contact Me</h2>
        <Link to="mailto:mgberrysd@gmail.com">Email</Link>
        <Link to="https://github.com/mgberrysd/">Github</Link>
        <Link to="https://www.linkedin.com/in/michael-berry-6a7b36156/">LinkedIn</Link>
      </div>

    </main>
  );
}
