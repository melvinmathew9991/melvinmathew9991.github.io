// One project card: role and status, GitHub link, title, outcome, headline metrics, stack and links.
// Used statically on the home page and inside the interactive ProjectBrowser on /projects/.
// Featured projects link to their case study; archive projects link straight to the repo.
import '../styles/projects.css';

const STATUS = { 'in-progress': 'In progress', 'not-deployed': 'Not deployed' };

// The heading serif has no arrow glyph, so "before → after" values set the arrow in the body font.
// Each side stays on one line; a long pair wraps at the arrow instead of overflowing the card.
function Value({ text }) {
  const parts = text.split('→');
  if (parts.length === 1) return text;
  return (
    <>
      <span className="nowrap">{parts[0].trim()}</span>
      <span className="arrow" aria-hidden="true"> → </span>
      <span className="visually-hidden"> to </span>
      <span className="nowrap">{parts[1].trim()}</span>
    </>
  );
}

const iconProps = {
  'aria-hidden': 'true', width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none',
  stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round',
};

// headingLevel keeps the page outline valid: h3 under the home page's h2, h2 on /projects/.
export default function ProjectCard({ project, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;
  const { slug, title, outcome, role, stack, metrics, repo, demo, tier, status } = project;
  const featured = tier === 'featured';
  const caseStudy = `/projects/${slug}/`;
  const href = featured ? caseStudy : repo || demo[0]?.url;
  const hasLinks = featured || demo.length > 0;

  return (
    <article className="project">
      <div className="project-top">
        <p className="project-meta">
          <span className="pill">{role}</span>
          {STATUS[status] && <span className="pill project-status">{STATUS[status]}</span>}
        </p>
        {repo && (
          <p className="project-icons">
            <a href={repo} aria-label={`Code for ${title} on GitHub`} title="Code on GitHub">
              <svg {...iconProps}>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </p>
        )}
      </div>
      <Heading className="project-title">
        <a href={href}>{title}</a>
      </Heading>
      <p className="project-outcome">{outcome}</p>
      {metrics.length > 0 && (
        <dl className="project-metrics">
          {metrics.map((m) => (
            <div key={m.label}>
              <dt>{m.label}</dt>
              <dd className="num"><Value text={m.value} /></dd>
            </div>
          ))}
        </dl>
      )}
      <ul className="project-stack" aria-label="Stack">
        {stack.map((s) => (
          <li key={s} className="pill">{s}</li>
        ))}
      </ul>
      {hasLinks && (
        <p className="project-links">
          {featured && (
            <a href={caseStudy}>
              Read the case study<span className="visually-hidden">: {title}</span>
            </a>
          )}
          {demo.map((d) => (
            <a key={d.url} href={d.url}>
              {d.label}
              <span className="visually-hidden"> for {title}</span>
            </a>
          ))}
        </p>
      )}
    </article>
  );
}
