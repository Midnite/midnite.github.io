import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const renderApp = () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
};

describe('App component', () => {
  beforeAll(() => {
    window.scrollTo = jest.fn();
  });

  test('renders homepage by default', async () => {
    renderApp();
    const homepageElement = await screen.findByText(/Software Engineer and Analyst venturing into Data Science/i);
    expect(homepageElement).toBeInTheDocument();
  });

  test('renders about page when about link is clicked', async () => {
    renderApp();
    const aboutLinks = screen.getAllByRole('link', { name: /about/i }, { exact: false });
    const aboutLink = aboutLinks.find(link => link.textContent === 'About');
    if (!aboutLink) {
      throw new Error('Could not find link with text content "About"');
    }
    userEvent.click(aboutLink);
    const aboutElement = await screen.findByText(/Hi, I’m Monika!/i);
    expect(aboutElement).toBeInTheDocument();
  });

  test('renders projects page when projects link is clicked', async () => {
    renderApp();
    const projectsLinks = screen.getAllByRole('link', { name: /projects/i }, { exact: false });
    const projectsLink = projectsLinks.find(link => link.textContent === 'Projects');
    userEvent.click(projectsLink);
    const projectsElement = await screen.findByText(/Projects big and small, that showcase my skills and interests/i);
    expect(projectsElement).toBeInTheDocument();
  });

  test('renders contact page when contact link is clicked', async () => {
    renderApp();
    const contactLinks = screen.getAllByRole('link', { name: /contact/i }, { exact: false });
    const contactLink = contactLinks.find(link => link.textContent === 'Contact');
    userEvent.click(contactLink);
    const contactElement = await screen.findByText(/Let's get in touch!/i);
    expect(contactElement).toBeInTheDocument();
  });

  test('renders 404 page when invalid path is entered', async () => {
    render(
      <MemoryRouter initialEntries={['/invalid']}>
        <App />
      </MemoryRouter>
    );
    const notFoundElement = await screen.findByText(/Oops/i);
    expect(notFoundElement).toBeInTheDocument();
  });
});